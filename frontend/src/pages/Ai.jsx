import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ghumtihui from "../componentsHome/ghumtihui.mp4";
import stable from "./stable.mp4";
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { Mic, Square } from 'lucide-react';

// Import the Azure Speech SDK
import * as sdk from "microsoft-cognitiveservices-speech-sdk";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              VoiceCare
            </span>
          </div>

          {/* Logout Button (Always Visible) */}
          <Link 
            to="/voicecare-logout" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm sm:text-base font-medium transition-colors"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};


const Ai = () => {
  const { username } = useContext(AuthContext);
  const [isListening, setIsListening] = useState(false);
  const [processingText, setProcessingText] = useState(false);
  const [responseText, setResponseText] = useState("");

  const recognizerRef = useRef(null);
  const synthesizer = useRef(null);

  const AZURE_SPEECH_KEY = import.meta.env.VITE_AZURE_SPEECH_KEY;
  const AZURE_REGION = import.meta.env.VITE_AZURE_REGION;

  useEffect(() => {
    if (!AZURE_SPEECH_KEY || !AZURE_REGION) {
      console.error("Azure Speech key/region is missing. Set it in .env file.");
      return;
    }

    const speechConfig = sdk.SpeechConfig.fromSubscription(AZURE_SPEECH_KEY, AZURE_REGION);
    const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();

    synthesizer.current = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

    return () => {
      recognizerRef.current?.close();
      synthesizer.current?.close();
    };
  }, [AZURE_SPEECH_KEY, AZURE_REGION]);

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const startListening = () => {
    if (!AZURE_SPEECH_KEY || !AZURE_REGION) return;
    setIsListening(true);
  
    const speechConfig = sdk.SpeechConfig.fromSubscription(AZURE_SPEECH_KEY, AZURE_REGION);
    const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
  
    recognizerRef.current = new sdk.SpeechRecognizer(speechConfig, audioConfig);
  
    recognizerRef.current.recognized = (s, e) => {
      if (e.result.reason === sdk.ResultReason.RecognizedSpeech) {
        console.log(`Recognized: ${e.result.text}`);
      } else {
        console.error(`Speech recognition error: ${e.result.reason}`);
      }
    };
    
  
    recognizerRef.current.recognized = (s, e) => {
      if (e.result.reason === sdk.ResultReason.RecognizedSpeech) {
        console.log(`Recognized: ${e.result.text}`);
        setResponseText(e.result.text);  // Update the UI with the recognized text
        stopListening();
        setProcessingText(true);
  
        sendTextToServer(e.result.text)
          .then(response => {
            setResponseText(response);
            speakResponse(response);
          })
          .catch(error => {
            console.error("Error processing request:", error);
            setProcessingText(false);
          });
      }
    };
  
    recognizerRef.current.startContinuousRecognitionAsync();
  };
  

  const stopListening = () => {
    setIsListening(false);
  
    if (recognizerRef.current) {
      recognizerRef.current.stopContinuousRecognitionAsync(() => {
        recognizerRef.current.close();
        recognizerRef.current = null;
      });
    }
  };
  

  const sendTextToServer = async (text) => {
    try {
      
      const response = await axios.post(`${import.meta.env.VITE_PYTHON_BASE_URL}/voicecare-processing`, { 
        text, 
        user_id: username 
      });

      if (response.status === 200 || response.status === 201) {
        return response.data.response;
      } else {
        throw new Error(`Server responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error sending text to server:", error.response?.data || error.message);
      throw error;
    }
  };

  const speakResponse = (text) => {
    if (!synthesizer.current) return;

    synthesizer.current.speakTextAsync(
      text,
      (result) => {
        if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
          setProcessingText(false);
        } else {
          console.error("Speech synthesis failed:", result.errorDetails);
          setProcessingText(false);
        }
      },
      (error) => {
        console.error("Speech synthesis error:", error);
        setProcessingText(false);
      }
    );
  };

  return (
    <>
      
      <Navbar />
      
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="relative w-100 h-100 flex items-center justify-center">
          {isListening ? (
            <video src={ghumtihui} className="absolute w-full h-full object-cover rounded-full" autoPlay loop muted />
          ) : (
            <video src={stable} className="absolute w-full h-full object-cover rounded-full" autoPlay loop muted />
          )}

          <button
            onClick={toggleListening}
            disabled={processingText}
            className={`relative z-10 p-8 rounded-full ${
              isListening ? 'bg-red-500' : 'bg-gradient-to-r from-blue-400 to-purple-500'
            } hover:opacity-90 disabled:opacity-50 transition-all shadow-lg`}
          >
            {isListening ? (
              <Square size={50} className="text-white" />
            ) : (
              <Mic size={50} className="text-white" />
            )}
          </button>
        </div>

        <div className="absolute bottom-25 text-center text-white">
          {processingText ? "Processing..." : responseText || "Click the mic to speak"}
        </div>
      </div>
    </>
    
  );
};

export default Ai;
