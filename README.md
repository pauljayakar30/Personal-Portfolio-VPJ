# Vasu Paul Jayakar - React Portfolio

A modern, responsive portfolio website built with React, featuring a sleek dark theme with animated violet breathing effects, showcasing my skills, projects, and achievements as an AIML student at Mohan Babu University.

## 🚀 Features

- ⚛️ **Modern React Architecture** - Component-based design with hooks
- 🎨 **Pure Black Neumorphic Design** - Elegant dark theme with glossy black aesthetics
- ✨ **Animated Background** - Breathing violet gradient that moves across different positions
- 📱 **Fully Responsive** - Optimized for all screen sizes (1440px+ to 280px)
- 🌟 **Interactive Hover Effects** - Gradient hover lines on containers
- �️ **Enhanced Profile Display** - Large animated profile photo with violet glow
- 🎯 **Smooth Animations** - Framer Motion for fluid interactions
- 📧 **Clean Contact Form** - Streamlined contact section
- � **Dynamic Certifications** - Expandable certification categories
- 🔗 **Social Integration** - Direct links to resume, LinkedIn, and GitHub

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Build Tool**: Vite
- **Styling**: CSS3 with Neumorphic Design
- **Animations**: Framer Motion, React Intersection Observer
- **Icons**: Font Awesome (via CDN)
- **Routing**: React Router DOM
- **Package Manager**: npm

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/pauljayakar30/portfolio.git
   cd portfolio/react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── DarkModeToggle.jsx
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── ProjectsSection.jsx
│   ├── SkillsSection.jsx
│   ├── EducationSection.jsx
│   ├── CertificationsSection.jsx
│   └── ContactSection.jsx
├── pages/               # Page components
│   ├── Home.jsx
│   ├── Certifications.jsx
│   └── ProjectDetails.jsx
├── hooks/               # Custom React hooks
│   └── useDarkMode.js
├── App.jsx             # Main app component
├── App.css             # Main styles
├── index.css           # Global styles
└── main.jsx            # App entry point
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code for errors

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy dist folder to Netlify**

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🎨 Customization

### Adding New Projects
1. Update the projects data in `src/components/ProjectsSection.jsx`
2. Add project details in `src/pages/ProjectDetails.jsx`

### Modifying Sections
- Each section is a separate component in `src/components/`
- Edit the respective component to modify content

### Styling
- Main styles: `src/App.css`
- Global styles: `src/index.css`
- Component-specific styles: Inline or styled-jsx

### Dark Mode
- Managed by `src/hooks/useDarkMode.js`
- CSS variables in `src/App.css` handle theme switching

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 991px
- **Desktop**: > 992px

## 🔧 Configuration

### Vite Configuration
Located in `vite.config.js` - handles build optimization and dev server settings.

### ESLint Configuration
Located in `.eslintrc.json` - code quality and consistency rules.

## 🌟 Features Breakdown

### Navigation
- Smooth scrolling to sections
- Active section highlighting
- Mobile-responsive navbar with collapse

### Dark Mode
- System preference detection
- localStorage persistence
- Smooth theme transitions

### Animations
- Fade-in sections on scroll
- Typing effect in hero section
- Bounce animations on interactions

### Contact Form
- Form validation
- Backend API integration
- Success/error feedback

## 📊 Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

## 📞 Contact & Support

- **Email**: pauljayakar30@gmail.com
- **LinkedIn**: [pauljayakar30](https://www.linkedin.com/in/pauljayakar30/)
- **GitHub**: [pauljayakar30](https://github.com/pauljayakar30)

## 📄 License

This project is licensed under the MIT License - feel free to use it as inspiration for your own portfolio!

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the lightning-fast build tool
- **Bootstrap Team** - For the responsive CSS framework
- **AOS Library** - For beautiful scroll animations

---

**Built with ❤️ by Vasu Paul Jayakar**
