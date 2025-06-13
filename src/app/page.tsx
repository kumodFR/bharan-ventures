"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Rocket,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <>
     <div className="flex min-h-screen flex-col ml-6 mr-6">    

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white mt-10 mb-10">
          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  We Build and Back{" "}
                  <span className="text-sky-700">Game-Changing</span> Startups.
                </h1>
                <p className="text-lg text-gray-600 md:text-xl">
                  Bharan Ventures is a venture studio and startup advisory
                  platform. We co-create bold ideas with founders, support
                  execution with expert systems, and scale ventures with
                  investor-ready momentum.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-sky-700 hover:bg-sky-800">
                    Start Your Venture
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-sky-700 text-sky-700 hover:bg-sky-50"
                  >
                    Join Our Network
                  </Button>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-sky-50 rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Startup Growth"
                    width={500}
                    height={300}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section id="how-we-work" className="bg-gray-50 rounded-md">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-10">
              From Idea to Impact, Together
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our proven studio model helps founders build successful ventures
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 p-4">
            {[
              {
                title: "Discover & Score",
                description:
                  "We work with visionary founders to validate their startup idea using our proprietary FoundersBadge™ Scorecard.",
                icon: <BarChart3 className="h-10 w-10 text-sky-700" />,
              },
              {
                title: "Co-Create the Foundation",
                description:
                  "From GTM playbooks to product positioning, we help startups shape the critical first mile—market, model, messaging, and momentum.",
                icon: <Users className="h-10 w-10 text-sky-700" />,
              },
              {
                title: "Operate & Scale",
                description:
                  "We support execution with on-ground support, hiring, CRM tools, advisor connects, and early-stage capital readiness.",
                icon: <Rocket className="h-10 w-10 text-sky-700" />,
              },
              {
                title: "Venture Growth Partnership",
                description:
                  "We walk the long road—building with skin in the game via sweat equity, shared KPIs, and aligned growth goals.",
                icon: <Briefcase className="h-10 w-10 text-sky-700" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="mt-6">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Live Ventures & Case Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Startups we're building and growing together
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
            {[
              {
                name: "Farminsta",
                work: "GTM, Influencer-Led Campaigns, Seed Sales Engine",
                sector: "AgriTech",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Pandoforce",
                work: "Field Force CRM, SaaS GTM, Strategic Hiring",
                sector: "SaaS / Logistics",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Roostr",
                work: "Rural Sports Streaming Platform",
                sector: "Media / Rural",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "FreshBasket",
                work: "D2C Veg Boxes from Farm Clusters",
                sector: "F&V / D2C",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "FounderBadge",
                work: "Startup Scoring + Advisor Matchmaking Platform",
                sector: "SaaS / Startup Tools",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((company, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 relative">
                  <Image
                    src={company.image || "/placeholder.svg"}
                    alt={company.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl text-gray-900">
                      {company.name}
                    </h3>
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {company.sector}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{company.work}</p>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button className="bg-blue-600 hover:bg-blue-700">
              View Our Venture Portfolio <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              More Than Mentorship. Real Execution Support.
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive services to help startups succeed
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Go-to-Market (GTM) Design",
                description:
                  "From ICP definition to multi-channel campaign strategy, we help startups build scalable outreach models.",
                features: [
                  "Customer persona development",
                  "Channel strategy",
                  "Campaign planning",
                  "Messaging framework",
                ],
              },
              {
                title: "Fundraising Readiness",
                description:
                  "Decks, due diligence data rooms, investor intros, and milestone planning to unlock seed or bridge capital.",
                features: [
                  "Pitch deck creation",
                  "Financial modeling",
                  "Investor targeting",
                  "Due diligence preparation",
                ],
              },
              {
                title: "Founder's Office Support",
                description:
                  "We work as an extended CXO office—hiring, ops setup, task systems, reviews, and team workflows.",
                features: [
                  "Recruitment support",
                  "Operations setup",
                  "Process implementation",
                  "Performance management",
                ],
              },
              {
                title: "Consultant Network & Advisory Bench",
                description:
                  "Access to domain experts across marketing, tech, ops, legal, and growth. Pay-as-you-scale.",
                features: [
                  "On-demand expertise",
                  "Fractional leadership",
                  "Specialized consulting",
                  "Industry connections",
                ],
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:border-blue-200 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section
        id="join-us"
        className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white  mt-10 p-6 rounded-md"
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Let's Build Something Big, Together.
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
              Multiple ways to collaborate with Bharan Ventures
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 ">
            {[
              {
                title: "For Founders",
                description:
                  "Have a bold idea and a market insight? We'll help you shape it into a company.",
                cta: "Apply for Co-Building Program",
                icon: "💡",
              },
              {
                title: "For Interns & CXOs",
                description:
                  "Join our venture teams as interns, community managers, or strategic hires.",
                cta: "Explore Roles",
                icon: "👥",
              },
              {
                title: "For Consultants & Advisors",
                description:
                  "Plug into live ventures, contribute on-demand, and grow with equity-linked models.",
                cta: "Join the Advisory Bench",
                icon: "🧠",
              },
            ].map((option, i) => (
              <div
                key={i}
                className="bg-white text-gray-900 p-8 rounded-xl shadow-lg transform transition-transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  {option.cta} <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-10 mb-10">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-blue-600 text-white p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-blue-100 mb-8">
                  We're always open to ideas, intros, and collaborations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8">📩</div>
                    <div>
                      Email:{" "}
                      <a
                        href="mailto:hello@bharanventures.com"
                        className="underline"
                      >
                        hello@bharanventures.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8">📍</div>
                    <div>Based in: Hyderabad & Bengaluru</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8">🔗</div>
                    <div>
                      LinkedIn:{" "}
                      <a
                        href="https://linkedin.com/company/bharanventures"
                        className="underline"
                      >
                        linkedin.com/company/bharanventures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-xl font-semibold mb-6">
                  Start your journey with us:
                </h3>
                <div className="space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Submit Your Startup Idea
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Book an Intro Call
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Join as Intern/Advisor
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      </div>
    </>
  );
}

const Page=()=>{
  return(
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default Page;