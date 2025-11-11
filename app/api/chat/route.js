import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "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",
});

// Website content context
const websiteContext = `
DevSage Solutions is a leading software development company specializing in cutting-edge web applications, mobile solutions, and digital transformation services.

COMPANY OVERVIEW:
- Company Name: DevSage Solutions
- Industry: Software Development & Technology Solutions
- Focus: Digital transformation, web applications, mobile solutions

KEY STATISTICS:
- 500+ Successful Projects Completed
- 200+ Happy Clients
- 98% Success Rate
- Expert Team of 50+ Professionals

SERVICES & EXPERTISE:
- Software Development
- Web Development
- Mobile App Development
- Digital Solutions
- Technology Consulting
- Cutting-edge Technology Stack

ABOUT THE COMPANY:
We are a leading digital solutions company dedicated to transforming businesses through innovative technology and creative excellence. Our team combines technical expertise with creative vision to deliver exceptional results.

WHY CHOOSE US:
- Award-Winning Solutions
- Dedicated Support Team
- Proven Track Record
- Innovation-Driven Approach
- Client-centric approach
- Commitment to excellence

HOW WE WORK:
- Agile Methodology
- Collaborative Approach
- Regular Progress Updates
- Continuous Improvement
- Streamlined process ensuring transparency and efficiency

CASE STUDIES:
- Real-World Results
- Client Success Stories
- Technical Excellence
- Innovative Solutions

MISSION:
Transform Your Business with Digital Excellence. We deliver cutting-edge solutions that drive growth, innovation, and success for businesses worldwide. Experience the future of technology with our expert team.
`;

export async function POST(request) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
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
- Show enthusiasm about the company's achievements and services`;

    // Prepare messages for OpenAI
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.slice(-10), // Keep last 10 messages for context
      { role: 'user', content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Using a valid model name
      messages: messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const aiResponse = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    return NextResponse.json({
      response: aiResponse,
    });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { error: 'Failed to get response from AI. Please try again.' },
      { status: 500 }
    );
  }
}

