import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// Website content context
const websiteContext = `
DevSage Solutions is a leading software development company specializing in cutting-edge web applications, mobile solutions, and digital transformation services.

COMPANY OVERVIEW:
- Company Name: DevSage Solutions
- Industry: Software Development & Technology Solutions
- Focus: Digital transformation, web applications, mobile solutions
- Tagline: "Transform Your Business with Digital Excellence"
- Brand Identity: Innovation-focused with expertise in modern technology stack
- Brand Motto: "Innovation" (displayed under logo)
- Website URL: https://devsagesolutions.vercel.app
- Logo: "DS" initials with blue-to-teal gradient background

KEY STATISTICS (Displayed on Hero Section):
- 500+ Successful Projects Completed
- 200+ Happy Clients
- 98% Success Rate
- Expert Team of 50+ Professionals

HERO SECTION - MAIN MESSAGE:
"Transform Your Business with Digital Excellence"
- We deliver cutting-edge solutions that drive growth, innovation, and success for businesses worldwide
- Experience the future of technology with our expert team
- Focus on growth, innovation, and success
- Call-to-Action Buttons: "Get Started" and "Learn More"
- Visual Design: Features overlapping business solution images with parallax effects

DETAILED SERVICES OFFERED (8 Main Services):

1. WEBSITE DEVELOPMENT:
   Description: Professional, responsive websites that make a lasting impression and drive results
   Overview: Transform your online presence with stunning, high-performance websites designed to captivate your audience and convert visitors into customers
   Key Features:
   - Fully Responsive Design
   - SEO Optimized
   - Fast Loading Times
   - Modern UI/UX
   - Cross-Browser Compatible
   - Mobile-First Approach
   Technologies: React, Next.js, Tailwind CSS, TypeScript, Node.js
   Gradient Color: Blue to Cyan

2. WEBSITE & ADMIN DASHBOARD:
   Description: Complete web solutions with powerful admin dashboards for seamless content management
   Overview: Get a complete web solution with a beautiful public-facing website and a powerful admin dashboard to manage all aspects of your business
   Key Features:
   - User Authentication System
   - Content Management System
   - Analytics Dashboard
   - Role-Based Access Control
   - Real-Time Updates
   - Data Visualization
   Technologies: React, Next.js, MongoDB, Firebase, Chart.js
   Gradient Color: Purple to Pink

3. WEB APPLICATIONS:
   Description: Custom web applications built to streamline your business processes and boost productivity
   Overview: Build powerful, scalable web applications tailored to your specific business needs. From SaaS platforms to enterprise solutions
   Key Features:
   - Custom Functionality
   - API Integration
   - Real-Time Features
   - Scalable Architecture
   - Cloud Deployment
   - Security First
   Technologies: React, Node.js, Express, PostgreSQL, AWS
   Gradient Color: Green to Emerald

4. E-COMMERCE PLATFORM:
   Description: Full-featured e-commerce platforms that turn browsers into buyers and maximize sales
   Overview: Launch your online store with a complete e-commerce solution featuring secure payments, inventory management, and seamless shopping experiences
   Key Features:
   - Product Management
   - Shopping Cart & Checkout
   - Payment Gateway Integration
   - Order Management
   - Inventory Tracking
   - Customer Reviews
   Technologies: Next.js, Stripe, MongoDB, Redis, AWS S3
   Gradient Color: Orange to Red

5. MOBILE APP DEVELOPMENT (Android & iOS):
   Description: Native and cross-platform mobile apps that deliver exceptional user experiences on any device
   Overview: Reach your customers wherever they are with beautifully designed mobile applications for both Android and iOS platforms
   Key Features:
   - Native Performance
   - Cross-Platform Support
   - Push Notifications
   - Offline Capabilities
   - App Store Optimization
   - Regular Updates
   Technologies: React Native, Flutter, Swift, Kotlin, Firebase
   Gradient Color: Indigo to Purple

6. REAL ESTATE PLATFORM:
   Description: Comprehensive real estate platforms connecting buyers, sellers, and agents seamlessly
   Overview: Create a powerful real estate platform with property listings, virtual tours, agent management, and advanced search capabilities
   Key Features:
   - Property Listings
   - Advanced Search Filters
   - Virtual Tours
   - Agent Management
   - Lead Generation
   - Document Management
   Technologies: Next.js, Google Maps API, MongoDB, Cloudinary, Stripe, Mpesa
   Gradient Color: Teal to Cyan

7. MAINTENANCE SERVICES:
   Description: Ongoing support and maintenance to keep your digital products running smoothly
   Overview: Ensure your digital products stay updated, secure, and performant with our comprehensive maintenance and support services
   Key Features:
   - Regular Updates
   - Security Patches
   - Performance Optimization
   - Bug Fixes
   - 24/7 Monitoring
   - Technical Support
   Technologies: DevOps, CI/CD, Monitoring Tools, Backup Systems
   Gradient Color: Yellow to Orange

8. POS PLATFORM (Point of Sale):
   Description: Point of Sale systems that streamline transactions and manage your business operations
   Overview: Modern POS solutions that handle sales, inventory, payments, and reporting all in one integrated platform
   Key Features:
   - Transaction Processing
   - Inventory Management
   - Sales Reporting
   - Multi-Payment Options
   - Receipt Generation
   - Employee Management
   Technologies: React, Node.js, Payment APIs, Print APIs, Cloud Sync
   Gradient Color: Rose to Pink

ABOUT THE COMPANY - DETAILED SECTIONS (4 Interactive Sections):

1. ABOUT US:
   Title: "About Our Company"
   Description: We are a leading digital solutions company dedicated to transforming businesses through innovative technology and creative excellence. Our team combines technical expertise with creative vision to deliver exceptional results.
   Key Features:
   - Expert Team of 50+ Professionals
   - 500+ Successful Projects Delivered
   - Innovation-Driven Approach
   - Cutting-Edge Technology Stack

2. WHY CHOOSE US:
   Title: "Why We Stand Out"
   Description: We stand out through our commitment to excellence, client-centric approach, and proven track record of delivering exceptional results that drive real business growth.
   Key Features:
   - Award-Winning Solutions
   - Dedicated Support Team
   - Proven Track Record
   - Innovative Solutions

3. HOW WE WORK:
   Title: "Our Process"
   Description: Our streamlined process ensures transparency, efficiency, and exceptional results at every stage of your project through collaborative partnership.
   Key Features:
   - Agile Methodology
   - Collaborative Approach
   - Regular Progress Updates
   - Continuous Improvement

4. CASE STUDIES:
   Title: "Success Stories"
   Description: Explore our portfolio of successful projects and see how we've helped businesses achieve their digital transformation goals with measurable results.
   Key Features:
   - Real-World Results
   - Client Success Stories
   - Technical Excellence
   - Innovative Solutions

ADVANTAGES & BENEFITS (Why Clients Stay Loyal - 8 Key Advantages):

1. RELIABLE LONG-TERM SUPPORT & MAINTENANCE:
   Provide continuous updates, bug fixes, and technical assistance even after project delivery. Clients love knowing they are not abandoned once the project is done.
   Icon: Tool/Wrench
   Gradient: Blue to Cyan

2. TRANSPARENT COMMUNICATION:
   Keep clients informed about every stage — from planning, development, testing to deployment. Regular progress reports, open feedback channels, and quick responses build deep trust.
   Icon: Message Circle
   Gradient: Purple to Pink

3. CUSTOMIZED SOLUTIONS:
   Offer tailored software that fits the client unique goals and workflow instead of one-size-fits-all products. Personalization shows you understand and care about their business success.
   Icon: Settings
   Gradient: Green to Emerald

4. ON-TIME DELIVERY:
   Respecting deadlines and keeping promises demonstrates professionalism. Clients stay loyal to companies that are dependable and meet agreed timelines.
   Icon: Clock
   Gradient: Orange to Red

5. QUALITY AND SECURITY ASSURANCE:
   Follow best coding practices, perform thorough testing, and prioritize data security. Clients stay loyal when they feel their system is stable, secure, and future-proof.
   Icon: Shield
   Gradient: Indigo to Purple

6. COMPETITIVE AND FAIR PRICING:
   Provide clear, honest pricing with good value for the quality delivered. Transparent pricing builds trust and long-term relationships.
   Icon: Dollar Sign
   Gradient: Yellow to Orange

7. INNOVATIVE IDEAS & CONTINUOUS IMPROVEMENT:
   Offer fresh ideas, suggest improvements, and stay updated with the latest technologies. Clients appreciate a partner who helps them grow and stay ahead of competitors.
   Icon: Zap/Lightning
   Gradient: Teal to Cyan

8. BUILDING A PARTNERSHIP, NOT JUST A CONTRACT:
   Treat clients as collaborators — understand their business vision, goals, and challenges. A relationship-focused approach makes them feel valued and keeps them coming back.
   Icon: Users
   Gradient: Rose to Pink

CONTACT INFORMATION:
- Phone: +254700751245 (Call us anytime)
- WhatsApp: +254700751245 (Chat with us on WhatsApp)
- Email: tchasingajacques@gmail.com (Send us an email)
- Website: https://devsagesolutions.vercel.app
- Contact Methods Available: Phone calls, WhatsApp messaging, Email communication
- CTA Buttons: "Call Now", "WhatsApp Us", "Send Email"

WEBSITE STRUCTURE & NAVIGATION:
Navigation Menu Items:
- Home: Main landing page with Hero section (Keeper component with parallax background), About, Services, Advantages, Contact sections, and ChatBot
- About: Interactive section with 4 subsections (About Us, Why Choose Us, How We Work, Case Studies)
- Services: Comprehensive list of 8 main services with detailed modal popups showing features and technologies
- Advantages: 8 key advantages explaining why clients choose and stay with us
- Projects: Portfolio showcase page (currently shows "Our Projects - Will be updated soon")
- Contact: Contact information, company info card, services overview, and contact methods
- Get Started: Call-to-action button for new projects

Page Layout:
- Homepage: Keeper (Hero with background) → About → Services → Advantages → Contact → ChatBot (floating)
- Projects: Separate page at /projects route
- All sections use smooth scrolling navigation

TECHNOLOGY STACK & EXPERTISE:
Frontend Technologies:
- React (Component-based UI library)
- Next.js (React framework for production)
- Tailwind CSS (Utility-first CSS framework)
- TypeScript (Typed JavaScript)
- GSAP (Animation library for scroll triggers and animations)
- React Icons (Icon library: Fi and Hi icon sets)

Backend Technologies:
- Node.js (JavaScript runtime)
- Express (Web application framework)

Databases:
- MongoDB (NoSQL database)
- PostgreSQL (Relational database)
- Redis (In-memory data store)

Cloud & Infrastructure:
- AWS (Amazon Web Services)
- Firebase (Google's platform)
- Vercel (Deployment platform - devsagesolutions.vercel.app)

Mobile Development:
- React Native (Cross-platform mobile framework)
- Flutter (UI toolkit for mobile)
- Swift (iOS native development)
- Kotlin (Android native development)

Payment Integration:
- Stripe (Payment processing)
- Mpesa (Mobile money payment system)

APIs & Services:
- Google Maps API (For real estate platforms)
- Payment APIs (Various payment gateways)
- Print APIs (For POS receipt generation)
- Cloudinary (Image and video management)

Tools & Libraries:
- Chart.js (Data visualization)
- CI/CD (Continuous Integration/Deployment)
- DevOps tools (Infrastructure management)
- Monitoring Tools (System monitoring)

DESIGN & USER EXPERIENCE:
- Design Style: Modern, gradient-based, glassmorphism effects
- Color Scheme: Dark theme with blue, cyan, teal, purple gradients
- Animations: GSAP-powered scroll animations, parallax effects, floating particles
- Typography: Mona Sans font family
- Responsive Design: Mobile-first approach, fully responsive across all devices
- Interactive Elements: Hover effects, smooth transitions, modal popups for services
- Background Effects: Animated gradient overlays, floating particles, parallax scrolling

MISSION STATEMENT:
Transform Your Business with Digital Excellence. We deliver cutting-edge solutions that drive growth, innovation, and success for businesses worldwide. Experience the future of technology with our expert team.

CLIENT APPROACH:
- Partnership-focused rather than transactional
- Understanding client business vision and goals
- Collaborative development process
- Long-term relationship building
- Continuous support and improvement
- Transparent communication at every stage
- Customized solutions tailored to unique needs

PROJECTS PAGE:
Currently showcasing "Our Projects" with a message that portfolio will be updated soon. This section will feature real-world case studies and client success stories. Located at /projects route.

CHATBOT FEATURE:
- AI-powered chatbot available on the website
- Provides instant answers about company services and information
- Uses OpenAI GPT-4o-mini model
- Context-aware responses based on website content
- Floating chat button for easy access

BRAND VALUES:
- Innovation (Core brand value displayed in navigation)
- Excellence
- Transparency
- Partnership
- Reliability
- Quality
- Security
- Client-Centric Approach

WEBSITE FEATURES:
- Smooth scrolling navigation
- Interactive service modals with detailed information
- Animated statistics counters
- Parallax background effects
- Floating particles animation
- Responsive mobile menu
- Active section highlighting in navigation
- Glassmorphism design elements
- Gradient-based color schemes
- Professional animations and transitions

SEO & METADATA:
- Title: "DevSage Solutions"
- Description: Leading software development company specializing in cutting-edge web applications, mobile solutions, and digital transformation services
- Keywords: software development, web development, mobile app development, digital solutions, technology consulting
- Open Graph tags configured for social media sharing
- Twitter card metadata included
- Robots: Index and follow enabled
`

export async function POST (request) {
  try {
    const { message, conversationHistory = [] } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Build conversation context
    const systemPrompt = `You are a friendly and knowledgeable AI assistant for DevSage Solutions. Your role is to help visitors understand what the company does, its services, and answer questions about the business.

IMPORTANT CONTEXT ABOUT THE WEBSITE:
${websiteContext}

INSTRUCTIONS:
- Answer questions based ONLY on the website content provided above
- Be conversational, friendly, and human-like in your responses
- If asked about something not in the context, politely say you can only answer questions about DevSage Solutions based on the website content
- Keep responses concise but informative
- Use natural, conversational language
- Show enthusiasm about the company's achievements and services`

    // Prepare messages for OpenAI
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.slice(-10), // Keep last 10 messages for context
      { role: 'user', content: message }
    ]

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Using a valid model name
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000
    })

    const aiResponse =
      completion.choices[0]?.message?.content ||
      'Sorry, I could not generate a response.'

    return NextResponse.json({
      response: aiResponse
    })
  } catch (error) {
    console.error('OpenAI API error:', error)
    return NextResponse.json(
      { error: 'Failed to get response from AI. Please try again.' },
      { status: 500 }
    )
  }
}
