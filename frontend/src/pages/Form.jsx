import React, {useContext , useState } from 'react';
import { Plus, Minus, Save } from 'lucide-react';
import axios from 'axios'
import { useNavigate} from "react-router-dom";
import { AuthContext } from './AuthContext';

const Form = () => {
  const { username } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    user_id: username,
    basic_info: {
      name: '',
      age: '',
      gender: '',
      emergency_contact: ''
    },
    medical_info: {
      conditions: '',
      allergies: '',
      mobility: '',
      medications: [
        { name: '', dosage: '', time: '' }
      ]
    },
    daily_routine: {
      wake_time: '',
      bedtime: '',
      language: '',
      activities: ''
    },
    emergency_protocol: {
      hospital: '',
      caregiver: ''
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const navigate = useNavigate(); // Initialize useNavigate
  
    try {
      const response = await axios.post(
        "http://your-azure-api-url.com/insert", // Replace with actual API URL
        formData
      );
  
      if (response.status === 200 || response.status === 201) {
        navigate("/voicecare-ai"); // Navigate on success
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  const [medicationCount, setMedicationCount] = useState(1);

  const handleBasicInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      basic_info: {
        ...formData.basic_info,
        [name]: value
      }
    });
  };

  const handleMedicalInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      medical_info: {
        ...formData.medical_info,
        [name]: value
      }
    });
  };

  const handleMedicationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMedications = [...formData.medical_info.medications];
    updatedMedications[index] = {
      ...updatedMedications[index],
      [name]: value
    };

    setFormData({
      ...formData,
      medical_info: {
        ...formData.medical_info,
        medications: updatedMedications
      }
    });
  };

  const handleDailyRoutineChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      daily_routine: {
        ...formData.daily_routine,
        [name]: value
      }
    });
  };

  const handleEmergencyProtocolChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      emergency_protocol: {
        ...formData.emergency_protocol,
        [name]: value
      }
    });
  };


  const addMedication = () => {
    setFormData({
      ...formData,
      medical_info: {
        ...formData.medical_info,
        medications: [
          ...formData.medical_info.medications,
          { name: '', dosage: '', time: '' }
        ]
      }
    });
    setMedicationCount(medicationCount + 1);
  };

  const removeMedication = (index) => {
    if (medicationCount > 1) {
      const updatedMedications = formData.medical_info.medications.filter((_, i) => i !== index);
      setFormData({
        ...formData,
        medical_info: {
          ...formData.medical_info,
          medications: updatedMedications
        }
      });
      setMedicationCount(medicationCount - 1);
    }
  };




  return (
    <div className="h-screen bg-black/50 py-12 px-4">
      <div className=" bg-black/50 max-w-4xl mx-auto">
        <div className="bg-slate-300 rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Patient Information Form</h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* User ID */}
            <div className="space-y-2">
              <label htmlFor="user_id" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="user_id"
                name="user_id"
                value={username}
                readOnly
                placeholder="Username"
                className="bg-gradient-to-b from-blue-400 to-purple-500 text-white placeholder-white/70 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            {/* Basic Information Section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.basic_info.name}
                    onChange={handleBasicInfoChange}
                    placeholder="Full Name"
                    className="bg-gradient-to-b from-blue-400 to-purple-500 text-white placeholder-white/70 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.basic_info.age}
                    onChange={handleBasicInfoChange}
                    placeholder="Age"
                    className="bg-gradient-to-b from-blue-400 to-purple-500 text-white placeholder-white/70 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.basic_info.gender}
                    onChange={handleBasicInfoChange}
                    className="bg-gradient-to-b from-blue-400 to-purple-500 text-white w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  >
                    <option value="" disabled className="bg-gray-800">Select Gender</option>
                    <option value="Male" className="bg-gray-800">Male</option>
                    <option value="Female" className="bg-gray-800">Female</option>
                    <option value="Other" className="bg-gray-800">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="emergency_contact" className="block text-sm font-medium text-gray-700">
                    Emergency Contact
                  </label>
                  <input
                    type="text"
                    id="emergency_contact"
                    name="emergency_contact"
                    value={formData.basic_info.emergency_contact}
                    onChange={handleBasicInfoChange}
                    placeholder="Name and Phone Number"
                    className="bg-gradient-to-b from-blue-400 to-purple-500 text-white placeholder-white/70 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Medical Information Section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Medical Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="conditions" className="block text-sm font-medium text-gray-700">
                    Medical Conditions (comma separated)
                  </label>
                  <input
                    type="text"
                    id="conditions"
                    name="conditions"
                    value={formData.medical_info.conditions}
                    onChange={handleMedicalInfoChange}
                    placeholder="diabetes, hypertension, etc."
                    className="bg-gradient-to-b from-blue-400 to-purple-500 text-white placeholder-white/70 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="allergies" className="block text-sm font-medium text-gray-700">
                    Allergies
                  </label>
                  <input
                    type="text"
                    id="allergies"
                    name="allergies"
                    value={formData.medical_info.allergies}
                    onChange={handleMedicalInfoChange}
                    placeholder="List allergies or 'none'"
                    className="bg-gradient-to-b from-blue-400 to-purple-500 text-white placeholder-white/70 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="mobility" className="block text-sm font-medium text-gray-700">
                    Mobility Status
                  </label>
                  <select
                    id="mobility"
                    name="mobility"
                    value={formData.medical_info.mobility}
                    onChange={handleMedicalInfoChange}
                    className="bg-gradient-to-b from-blue-400 to-purple-500 text-white w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  >
                    <option value="" disabled className="bg-gray-800">Select Mobility Status</option>
                    <option value="Independent" className="bg-gray-800">Independent</option>
                    <option value="Walker" className="bg-gray-800">Walker</option>
                    <option value="Cane" className="bg-gray-800">Cane</option>
                    <option value="Wheelchair" className="bg-gray-800">Wheelchair</option>
                    <option value="Bedridden" className="bg-gray-800">Bedridden</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium text-gray-700">Medications</h4>
                  <button 
                    type="button" 
                    onClick={addMedication}
                    className="flex items-center justify-center bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700"
                  >
                    <Plus size={16} />
                    <span className="ml-1">Add Medication</span>
                  </button>
                </div>
                
                {formData.medical_info.medications.map((medication, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 p-4 bg-gray-50 rounded-md">
                    <div className="space-y-2">
                      <label htmlFor={`med-name-${index}`} className="block text-sm font-medium text-gray-700">
                        Medication Name
                      </label>
                      <input
                        type="text"
                        id={`med-name-${index}`}
                        name="name"
                        value={medication.name}
                        onChange={(e) => handleMedicationChange(index, e)}
                        placeholder="Medication Name"
                        className="bg-gradient-to-b from-blue-400 to-purple-500 text-white placeholder-white/70 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor={`med-dosage-${index}`} className="block text-sm font-medium text-gray-700">
                        Dosage
                      </label>
                      <input
                        type="text"
                        id={`med-dosage-${index}`}
                        name="dosage"
                        value={medication.dosage}
                        onChange={(e) => handleMedicationChange(index, e)}
                        placeholder="Dosage"
                        className="bg-gradient-to-b from-blue-400 to-purple-500 text-white placeholder-white/70 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                    <div className="space-y-2 relative">
                      <label htmlFor={`med-time-${index}`} className="block text-sm font-medium text-gray-700">
                        Time
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          id={`med-time-${index}`}
                          name="time"
                          value={medication.time}
                          onChange={(e) => handleMedicationChange(index, e)}
                          placeholder="When to take"
                          className="bg-gradient-to-b from-blue-400 to-purple-500 text-white placeholder-white/70 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                        {index > 0 && (
                          <button 
                            type="button" 
                            onClick={() => removeMedication(index)}
                            className="bg-red-500 text-white p-3 rounded-md hover:bg-red-600"
                          >
                            <Minus size={16} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Routine Section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Daily Routine</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="wake_time" className="block text-sm font-medium text-gray-700">
                    Wake Time
                  </label>
                  <input
                    type="text"
                    id="wake_time"
                    name="wake_time"
                    value={formData.daily_routine.wake_time}
                    onChange={handleDailyRoutineChange}
                    placeholder="e.g. 7:30 am"
                    className="bg-gradient-to-b from-blue-400 to-purple-500 text-white placeholder-white/70 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="bedtime" className="block text-sm font-medium text-gray-700">
                    Bedtime
                  </label>
                  <input
                    type="text"
                    id="bedtime"
                    name="bedtime"
                    value={formData.daily_routine.bedtime}
                    onChange={handleDailyRoutineChange}
                    placeholder="e.g. 11 pm"
                    className="bg-gradient-to-b from-blue-400 to-purple-500 text-white placeholder-white/70 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                    Preferred Language
                  </label>
                  <input
                    type="text"
                    id="language"
                    name="language"
                    value={formData.daily_routine.language}
                    onChange={handleDailyRoutineChange}
                    placeholder="e.g. English"
                    className="bg-gradient-to-b from-blue-400 to-purple-500 text-white placeholder-white/70 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="activities" className="block text-sm font-medium text-gray-700">
                    Favorite Activities
                  </label>
                  <input
                    type="text"
                    id="activities"
                    name="activities"
                    value={formData.daily_routine.activities}
                    onChange={handleDailyRoutineChange}
                    placeholder="e.g. music, reading, games"
                    className="bg-gradient-to-b from-blue-400 to-purple-500 text-white placeholder-white/70 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
              </div>
            </div>

            {/* Emergency Protocol */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Emergency Protocol</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="hospital" className="block text-sm font-medium text-gray-700">
                    Preferred Hospital
                  </label>
                  <input
                    type="text"
                    id="hospital"
                    name="hospital"
                    value={formData.emergency_protocol.hospital}
                    onChange={handleEmergencyProtocolChange}
                    placeholder="Hospital name"
                    className="bg-gradient-to-b from-blue-400 to-purple-500 text-white placeholder-white/70 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="caregiver" className="block text-sm font-medium text-gray-700">
                    Primary Caregiver
                  </label>
                  <input
                    type="text"
                    id="caregiver"
                    name="caregiver"
                    value={formData.emergency_protocol.caregiver}
                    onChange={handleEmergencyProtocolChange}
                    placeholder="Name and phone number"
                    className="bg-gradient-to-b from-blue-400 to-purple-500 text-white placeholder-white/70 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-md font-medium hover:from-blue-600 hover:to-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                <Save size={20} className="mr-2" />
                Save Patient Information
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;