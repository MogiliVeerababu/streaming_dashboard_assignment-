AI_Report.md
Project: Streaming Dashboard Web App (Next.js + TypeScript)
Student AI Report
1. Overview

This project is a Netflix-style streaming dashboard built with Next.js 14 App Router, TypeScript, and the TMDB API.
The interface includes:

A hero banner showing the featured movie

Horizontal movie rows (Trending / Popular)

A movie details page

Responsive layout using Tailwind CSS

Server-side data fetching via Next.js

In this report, I explain where and why I used AI during development.

2. Tools Used
AI Assistant: ChatGPT (GPT-5.1)

I used ChatGPT to support the following tasks:

3. When & How AI Was Used
A. Debugging Errors

AI helped me fix several common Next.js issues:

Correct use of await props.params for the dynamic route

Fixing Next.js Image errors (missing remotePatterns)

Identifying invalid folder import paths

Ensuring components properly used "use client"

AI was helpful mainly for small, targeted fixes.

B. Code Completion & Generation

AI provided template-level code—not full application code—for the following:

Basic structure of:

HeroBanner.tsx

MovieRow.tsx

MovieCard.tsx

Example page layout and TypeScript props

Example dynamic route page (app/movie/[id]/page.tsx)

These were used as starting points, then modified by me.

C. Optimization Guidance

AI helped refine my code:

Better image handling using TMDB original vs w500

Cleaner component organization

Simplifying server-side data fetching

Providing a more maintainable project structure

AI did not write the styling decisions or UI layout—those were designed manually.

D. Documentation Assistance

AI supported the writing of:

This AI_Report.md

Explanations for different files

Deployment instructions for Vercel (optional)

However, I edited and structured the content myself.

4. What AI Did Not Do

To be clear, AI did NOT:

❌ Build the whole project
❌ Create the final UI layout
❌ Decide styling, spacing, or responsive design
❌ Write the TMDB API logic
❌ Build the folder structure
❌ Handle Vercel deployment

All core development work—coding, debugging, styling, structure—was done manually by me.

5. Why AI Was Used

I used AI for learning support and troubleshooting, similar to how a developer might:

Google solutions

Read StackOverflow answers

Look up documentation

AI simply provided faster explanations and examples, but I implemented and adapted everything.

6. Reflection

Using AI improved my understanding of:

Next.js App Router data fetching

TypeScript typing for components

Server components vs. client components

Image optimization configuration

How dynamic routes work in Next.js

This project still required hands-on coding, problem-solving, and debugging by me.

7. Academic Integrity Statement

I confirm that this project was created by me.
AI was used only as a supportive tool (debugging, suggestions, explanation), not as a replacement for development work.