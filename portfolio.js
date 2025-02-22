// Import icons from Lucide
const { Mail, Phone, Linkedin, Github, BookOpen, FileText, Briefcase, GraduationCap, Award } = lucide;

const Portfolio = () => {
    const [activeSection, setActiveSection] = React.useState('projects');

    const sections = [
        { id: 'projects', label: 'Projects' },
        { id: 'publications', label: 'Publications' },
        { id: 'resume', label: 'Resume' },
        { id: 'contact', label: 'Contact' }
    ];

    const projects = [
        {
            title: "AI-Powered Cardiac Analysis",
            description: "Developed state-of-the-art ML framework for detecting abnormalities in cardiac ultrasound images, increasing diagnostic accuracy by 25%",
            technologies: ["Machine Learning", "Medical Imaging", "Python"],
            impact: "Enhanced early diagnosis capabilities",
            year: "2023",
            image: "images/cardiac-analysis.jpg", // Add your image here
            color: "from-blue-500 to-purple-600"
        },
        {
            title: "Archaeological Site Detection",
            description: "Led analysis of 70M satellite images (20TB) covering Afghanistan's surface, accelerating analysis speed by 400X",
            technologies: ["Computer Vision", "Satellite Imaging", "HPC"],
            impact: "Featured in Science Magazine",
            year: "2022",
            image: "images/archaeological.jpg", // Add your image here
            color: "from-emerald-500 to-teal-600"
        },
        {
            title: "Demographic Analysis in Literature",
            description: "Built ML system to detect 20 human demographic features across 1M+ book images",
            technologies: ["Deep Learning", "VertexAI", "Python"],
            impact: "Won Google Cloud Customer Awards",
            year: "2022",
            image: "images/demographic.jpg", // Add your image here
            color: "from-purple-500 to-pink-600"
        }
    ];

    const publications = [
        {
            title: "Measuring Representation of Race, Gender, and Age in Children's Books",
            authors: "Teodora Szasz, et al.",
            journal: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)",
            year: "2022",
            link: "https://openaccess.thecvf.com/content/WACV2022/papers/Szasz_Measuring_Representation_of_Race_Gender_and_Age_in_Childrens_Books_WACV_2022_paper.pdf"
        },
        {
            title: "Echocardiographic Detection of Regional Wall Motion Abnormalities Using AI",
            authors: "Jeremy A. Slivnick, et al.",
            journal: "Journal of the American Society of Echocardiography",
            year: "2024",
            link: "https://doi.org/10.1016/j.echo.2024.03.017"
        }
    ];

    const experience = [
        {
            title: "Senior Data Scientist",
            company: "Philips LLC",
            location: "Chicago, IL",
            period: "Jan 2023 - present",
            description: "Led AI innovations in FDA-Approved medical imaging devices"
        },
        {
            title: "Senior Computational Scientist",
            company: "University of Chicago",
            location: "Chicago, IL",
            period: "Feb 2021 - 2023",
            description: "Led team of 10 researchers across departments"
        }
    ];

    const education = [
        {
            degree: "PhD in Computer Science",
            institution: "University of Toulouse",
            location: "France",
            year: "2016"
        },
        {
            degree: "MSc in Multimedia Technologies",
            institution: "Technical University of Cluj-Napoca",
            location: "Romania",
            year: "2014"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm py-16 mb-8">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Teodora Szasz</h1>
                    <p className="text-xl text-gray-600">Senior AI Researcher | Computer Vision</p>
                </div>
            </header>

            {/* Navigation */}
            <nav className="max-w-4xl mx-auto px-4 mb-8">
                <div className="flex gap-4 justify-center">
                    {sections.map(section => (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`px-4 py-2 rounded-lg transition-colors ${
                                activeSection === section.id 
                                    ? 'bg-blue-500 text-white' 
                                    : 'bg-white hover:bg-gray-100'
                            }`}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>
            </nav>

            {/* Content */}
            <main className="max-w-6xl mx-auto px-4 pb-16">
                {/* Projects Section */}
                {activeSection === 'projects' && (
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold mb-8 text-center">Featured Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {projects.map((project, index) => (
                                <div 
                                    key={index} 
                                    className="group relative bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                                            <span className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full">{project.year}</span>
                                        </div>
                                        
                                        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                                        
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, i) => (
                                                <span 
                                                    key={i} 
                                                    className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2 text-blue-600">
                                            <Award size={16} />
                                            <span className="font-medium">{project.impact}</span>
                                        </div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Publications Section */}
                {activeSection === 'publications' && (
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold mb-6">Publications</h2>
                        <div className="grid gap-6">
                            {publications.map((pub, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                                    <p className="text-gray-600 mb-2">{pub.authors}</p>
                                    <p className="text-gray-500 mb-4">{pub.journal} • {pub.year}</p>
                                    <a 
                                        href={pub.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        View Publication →
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Resume Section */}
                {activeSection === 'resume' && (
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Briefcase size={24} />
                                Experience
                            </h2>
                            <div className="grid gap-6">
                                {experience.map((exp, index) => (
                                    <div key={index
