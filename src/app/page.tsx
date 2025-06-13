"use client";

import AnimatedSection from "@/components/animated-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { div } from "framer-motion/client";
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
import { useRouter } from "next/navigation";
import Router from "next/router";

function HeroSection() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white mt-10 mb-10">
        <div className="relative z-10 mx-auto w-full lg:ml-16 sm:mx-8 ">
          {" "}
          {/* px-2.5 = ~10px */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                We Build and Back{" "}
                <span className="text-[#2471A3]">Game-Changing</span> Startups.
              </h1>
              <p className="text-lg text-gray-600 md:text-xl">
                Bharan Ventures is a venture studio and startup advisory
                platform. We co-create bold ideas with founders, support
                execution with expert systems, and scale ventures with
                investor-ready momentum.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#2471A3] hover:bg-sky-800">
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
  );
}

function IdeaTowork() {
  return (
    <section id="how-we-work" className="bg-gray-50 rounded-md mt-10 scroll-mt-20">
      <div className="mt-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-10">
            From Idea to Impact, Together
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our proven studio model helps founders build successful ventures
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 p-4 ml-10 mr-10">
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
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="mt-5">
      <div className="mr-10 ml-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Our Live Ventures & Case Stories
          </h2>
          <p className="mt-2 text-base text-gray-600 max-w-2xl mx-auto">
            Startups we're building and growing together
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-2">
          {[
            {
              name: "Farminsta",
              url: "https://farminsta.com",
              work: "GTM, Influencer-Led Campaigns, Seed Sales Engine",
              sector: "AgriTech",
              image: "/logo/fi_lg (1).png",
              imageBg: "#f1f9f7",
            },
            {
              name: "Pando",
              url: "https://wearpando.com/",
              work: "Comfort Clothings for Bottom-wear",
              sector: "SaaS / Logistics",
              image: "/placeholder.svg?height=200&width=300",
              imageBg: "#EBF2F0",
            },
            {
              name: "Roostr",
              url: "https://roosterleague.in/",
              work: "Rural Sports Streaming Platform",
              sector: "Media / Rural",
              image: "/logo/RoosterLeague.png",
              imageBg: "",
            },
          ].map((company, i) => (
            <Link
              key={i}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow h-full">
                <div
                  className="h-32 relative"
                  style={{
                    background: company.imageBg,
                  }}
                >
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-gray-900">
                      {company.name}
                    </h3>
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                      {company.sector}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{company.work}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-6"
                    tabIndex={-1}
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className=" p-10">
      <div className="container">
        <div className="text-center ">
          <div className="text-3xl font-bold text-gray-900 sm:text-4xl">
            More Than Mentorship. Real Execution Support.
          </div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive services to help startups succeed
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 p-6">
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
                    <CheckCircle2 className="h-5 w-5 text-[#2471A3] mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JoinUsSection() {
  const router = useRouter();

  const handleClick = () => {
    window.open("/schedule-demo");
  };

  return (
    <section
      id="join-us"
      className="bg-[#2471A3] text-white  p-6 rounded-md"
    >
      <div className="ml-10 mr-10">
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
              <Button
                className="w-full bg-[#2471A3] hover:bg-[#2471A3]"
                onClick={handleClick}
              >
                {option.cta} <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const router = useRouter();
  const handleBookCall = () => {
    window.open("/schedule-demo");
  };

  return (
    <section id="contact" className="mt-10 mb-10">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-[#2471A3] text-white p-8 md:p-12">
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
                      info@bharan.in
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8">📍</div>
                  <div className="ml-2">
                    Based in: <br /> 1st Floor, SSR Arcade, Plot no: 328, Road
                    No. 1/2, Mathrusree Nagar, Hafeezpet, Miyapur, Hyderabad,
                    Telangana 500049
                  </div>
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
                <Button className="w-full bg-[#2471A3] hover:bg-[#2471A3]">
                  Submit Your Startup Idea
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#2471A3] text-[#2471A3] "
                  onClick={handleBookCall}
                >
                  Book an Intro Call
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#2471A3] text-[#2471A3] "
                >
                  Join as Intern/Advisor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Page = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AnimatedSection>
        <IdeaTowork />
      </AnimatedSection>

      <AnimatedSection>
        <PortfolioSection />
      </AnimatedSection>

      <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>

      <AnimatedSection>
        <JoinUsSection />
      </AnimatedSection>

      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
      <Footer />
    </>
  );
};

export default Page;
