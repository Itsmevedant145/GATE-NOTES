import React, { useState } from 'react';
import { Download, Upload, Edit3, Save, X, Plus, Trash2 } from 'lucide-react';

const ResumeBuilder = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: 'John Doe',
      title: 'Software Engineer',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/johndoe',
      website: 'johndoe.dev'
    },
    summary: 'Experienced software engineer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. Passionate about creating scalable solutions and leading development teams.',
    experience: [
      {
        id: 1,
        title: 'Senior Software Engineer',
        company: 'Tech Solutions Inc.',
        location: 'San Francisco, CA',
        duration: '2022 - Present',
        responsibilities: [
          'Led a team of 5 developers in building scalable web applications',
          'Implemented microservices architecture reducing system latency by 40%',
          'Mentored junior developers and conducted code reviews'
        ]
      },
      {
        id: 2,
        title: 'Software Engineer',
        company: 'StartupXYZ',
        location: 'San Francisco, CA',
        duration: '2020 - 2022',
        responsibilities: [
          'Developed responsive web applications using React and Node.js',
          'Collaborated with cross-functional teams to deliver features on time',
          'Optimized database queries improving application performance by 25%'
        ]
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of California, Berkeley',
        location: 'Berkeley, CA',
        duration: '2016 - 2020',
        gpa: '3.8/4.0'
      }
    ],
    skills: [
      'JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'AWS', 'Docker', 'Git', 'Agile/Scrum'
    ],
    projects: [
      {
        id: 1,
        name: 'E-commerce Platform',
        technologies: 'React, Node.js, PostgreSQL, AWS',
        description: 'Built a full-stack e-commerce platform with payment integration and inventory management',
        link: 'github.com/johndoe/ecommerce'
      },
      {
        id: 2,
        name: 'Task Management App',
        technologies: 'React Native, Firebase, Redux',
        description: 'Developed a cross-platform mobile app for team task management with real-time updates',
        link: 'github.com/johndoe/taskmanager'
      }
    ]
  });

  const handleInputChange = (section, field, value, index = null, subIndex = null) => {
    setResumeData(prev => {
      const newData = { ...prev };
      if (index !== null) {
        if (subIndex !== null) {
          newData[section][index][field][subIndex] = value;
        } else {
          newData[section][index][field] = value;
        }
      } else {
        if (section === 'personalInfo') {
          newData[section][field] = value;
        } else {
          newData[section] = value;
        }
      }
      return newData;
    });
  };

  const addExperience = () => {
    const newExp = {
      id: Date.now(),
      title: '',
      company: '',
      location: '',
      duration: '',
      responsibilities: ['']
    };
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, newExp]
    }));
  };

  const removeExperience = (id) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addEducation = () => {
    const newEdu = {
      id: Date.now(),
      degree: '',
      school: '',
      location: '',
      duration: '',
      gpa: ''
    };
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, newEdu]
    }));
  };

  const removeEducation = (id) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      name: '',
      technologies: '',
      description: '',
      link: ''
    };
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };

  const removeProject = (id) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== id)
    }));
  };

  const addResponsibility = (expIndex) => {
    setResumeData(prev => {
      const newData = { ...prev };
      newData.experience[expIndex].responsibilities.push('');
      return newData;
    });
  };

  const removeResponsibility = (expIndex, respIndex) => {
    setResumeData(prev => {
      const newData = { ...prev };
      newData.experience[expIndex].responsibilities.splice(respIndex, 1);
      return newData;
    });
  };

  const addSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, '']
    }));
  };

  const removeSkill = (index) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const handleSkillChange = (index, value) => {
    setResumeData(prev => {
      const newSkills = [...prev.skills];
      newSkills[index] = value;
      return { ...prev, skills: newSkills };
    });
  };

  const downloadPDF = () => {
    window.print();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert('File upload functionality would be implemented here. For now, this is just a demo.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Resume Builder</h1>
              <div className="flex gap-3">
                <label className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium cursor-pointer hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <Upload size={16} />
                  Upload PDF
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
                <button
                  onClick={downloadPDF}
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                  <Download size={16} />
                  Download PDF
                </button>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                  {isEditing ? <Save size={16} /> : <Edit3 size={16} />}
                  {isEditing ? 'Save' : 'Edit'}
                </button>
              </div>
            </div>
          </div>

          {/* Resume Content */}
          <div className="p-8" id="resume-content">
            {/* Personal Information */}
            <div className="mb-8">
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={resumeData.personalInfo.name}
                    onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
                    className="text-4xl font-bold text-gray-900 w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent"
                    placeholder="Full Name"
                  />
                  <input
                    type="text"
                    value={resumeData.personalInfo.title}
                    onChange={(e) => handleInputChange('personalInfo', 'title', e.target.value)}
                    className="text-xl text-gray-600 w-full border-b border-gray-300 focus:border-blue-500 outline-none bg-transparent"
                    placeholder="Job Title"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="email"
                      value={resumeData.personalInfo.email}
                      onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                      className="border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none"
                      placeholder="Email"
                    />
                    <input
                      type="tel"
                      value={resumeData.personalInfo.phone}
                      onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                      className="border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none"
                      placeholder="Phone"
                    />
                    <input
                      type="text"
                      value={resumeData.personalInfo.location}
                      onChange={(e) => handleInputChange('personalInfo', 'location', e.target.value)}
                      className="border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none"
                      placeholder="Location"
                    />
                    <input
                      type="text"
                      value={resumeData.personalInfo.linkedin}
                      onChange={(e) => handleInputChange('personalInfo', 'linkedin', e.target.value)}
                      className="border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none"
                      placeholder="LinkedIn"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{resumeData.personalInfo.name}</h1>
                  <p className="text-xl text-gray-600 mb-4">{resumeData.personalInfo.title}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span>{resumeData.personalInfo.email}</span>
                    <span>{resumeData.personalInfo.phone}</span>
                    <span>{resumeData.personalInfo.location}</span>
                    <span>{resumeData.personalInfo.linkedin}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Summary */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">Professional Summary</h2>
              {isEditing ? (
                <textarea
                  value={resumeData.summary}
                  onChange={(e) => handleInputChange('summary', null, e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none resize-none"
                  rows="4"
                  placeholder="Professional summary..."
                />
              ) : (
                <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
              )}
            </div>

            {/* Experience */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2">Experience</h2>
                {isEditing && (
                  <button
                    onClick={addExperience}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <Plus size={16} />
                    Add Experience
                  </button>
                )}
              </div>
              {resumeData.experience.map((exp, index) => (
                <div key={exp.id} className="mb-6 last:mb-0">
                  {isEditing ? (
                    <div className="space-y-3 border border-gray-200 rounded p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1 space-y-3">
                          <input
                            type="text"
                            value={exp.title}
                            onChange={(e) => handleInputChange('experience', 'title', e.target.value, index)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none font-semibold"
                            placeholder="Job Title"
                          />
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) => handleInputChange('experience', 'company', e.target.value, index)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none"
                            placeholder="Company"
                          />
                          <div className="grid grid-cols-2 gap-3">
                            <input
                              type="text"
                              value={exp.location}
                              onChange={(e) => handleInputChange('experience', 'location', e.target.value, index)}
                              className="border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none"
                              placeholder="Location"
                            />
                            <input
                              type="text"
                              value={exp.duration}
                              onChange={(e) => handleInputChange('experience', 'duration', e.target.value, index)}
                              className="border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none"
                              placeholder="Duration"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Responsibilities:</label>
                            {exp.responsibilities.map((resp, respIndex) => (
                              <div key={respIndex} className="flex gap-2">
                                <input
                                  type="text"
                                  value={resp}
                                  onChange={(e) => handleInputChange('experience', 'responsibilities', e.target.value, index, respIndex)}
                                  className="flex-1 border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none"
                                  placeholder="Responsibility"
                                />
                                <button
                                  onClick={() => removeResponsibility(index, respIndex)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <X size={16} />
                                </button>
                              </div>
                            ))}
                            <button
                              onClick={() => addResponsibility(index)}
                              className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                            >
                              <Plus size={14} />
                              Add Responsibility
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeExperience(exp.id)}
                          className="text-red-500 hover:text-red-700 ml-4"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                          <p className="text-gray-700">{exp.company} • {exp.location}</p>
                        </div>
                        <span className="text-sm text-gray-600">{exp.duration}</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2">Education</h2>
                {isEditing && (
                  <button
                    onClick={addEducation}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <Plus size={16} />
                    Add Education
                  </button>
                )}
              </div>
              {resumeData.education.map((edu, index) => (
                <div key={edu.id} className="mb-4 last:mb-0">
                  {isEditing ? (
                    <div className="space-y-3 border border-gray-200 rounded p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1 space-y-3">
                          <input
                            type="text"
                            value={edu.degree}
                            onChange={(e) => handleInputChange('education', 'degree', e.target.value, index)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none font-semibold"
                            placeholder="Degree"
                          />
                          <input
                            type="text"
                            value={edu.school}
                            onChange={(e) => handleInputChange('education', 'school', e.target.value, index)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none"
                            placeholder="School"
                          />
                          <div className="grid grid-cols-3 gap-3">
                            <input
                              type="text"
                              value={edu.location}
                              onChange={(e) => handleInputChange('education', 'location', e.target.value, index)}
                              className="border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none"
                              placeholder="Location"
                            />
                            <input
                              type="text"
                              value={edu.duration}
                              onChange={(e) => handleInputChange('education', 'duration', e.target.value, index)}
                              className="border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none"
                              placeholder="Duration"
                            />
                            <input
                              type="text"
                              value={edu.gpa}
                              onChange={(e) => handleInputChange('education', 'gpa', e.target.value, index)}
                              className="border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none"
                              placeholder="GPA"
                            />
                          </div>
                        </div>
                        <button
                          onClick={() => removeEducation(edu.id)}
                          className="text-red-500 hover:text-red-700 ml-4"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                        <p className="text-gray-700">{edu.school} • {edu.location}</p>
                        {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                      </div>
                      <span className="text-sm text-gray-600">{edu.duration}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2">Skills</h2>
                {isEditing && (
                  <button
                    onClick={addSkill}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <Plus size={16} />
                    Add Skill
                  </button>
                )}
              </div>
              {isEditing ? (
                <div className="space-y-2">
                  {resumeData.skills.map((skill, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={skill}
                        onChange={(e) => handleSkillChange(index, e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none"
                        placeholder="Skill"
                      />
                      <button
                        onClick={() => removeSkill(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Projects */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2">Projects</h2>
                {isEditing && (
                  <button
                    onClick={addProject}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <Plus size={16} />
                    Add Project
                  </button>
                )}
              </div>
              {resumeData.projects.map((project, index) => (
                <div key={project.id} className="mb-6 last:mb-0">
                  {isEditing ? (
                    <div className="space-y-3 border border-gray-200 rounded p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1 space-y-3">
                          <input
                            type="text"
                            value={project.name}
                            onChange={(e) => handleInputChange('projects', 'name', e.target.value, index)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none font-semibold"
                            placeholder="Project Name"
                          />
                          <input
                            type="text"
                            value={project.technologies}
                            onChange={(e) => handleInputChange('projects', 'technologies', e.target.value, index)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none"
                            placeholder="Technologies Used"
                          />
                          <textarea
                            value={project.description}
                            onChange={(e) => handleInputChange('projects', 'description', e.target.value, index)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none resize-none"
                            rows="3"
                            placeholder="Project Description"
                          />
                          <input
                            type="text"
                            value={project.link}
                            onChange={(e) => handleInputChange('projects', 'link', e.target.value, index)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:border-blue-500 outline-none"
                            placeholder="Project Link"
                          />
                        </div>
                        <button
                          onClick={() => removeProject(project.id)}
                          className="text-red-500 hover:text-red-700 ml-4"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                        <span className="text-sm text-blue-600">{project.link}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{project.technologies}</p>
                      <p className="text-gray-700">{project.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume-content, #resume-content * {
            visibility: visible;
          }
          #resume-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
export default ResumeBuilder;