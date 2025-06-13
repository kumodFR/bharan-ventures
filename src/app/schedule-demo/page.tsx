
'use client'

import React from 'react'

import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'



const ScheduleDemo = () => {

  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

  // Calendar State
  const [currentDate, setCurrentDate] = useState(new Date(2024, 9))
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  // Calendar Functions
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    return firstDay === 0 ? 6 : firstDay - 1
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const handleDateSelect = (date: number) => {
    const newDate = new Date(currentDate)
    newDate.setDate(date)
    setSelectedDate(newDate)
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDayOfMonth = getFirstDayOfMonth(currentDate)
  const monthYear = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })

 
  const meetingUrl = "https://meetings.hubspot.com/thangathtamilazhagie-abila?uuid=83ff10f3-2a62-4c51-9121-28aae5cae703";

  return (
    <div className="max-w-7xl mx-auto px-4 pt-8 pb-8 ">
      <div className="h-[calc(100vh-150px)] w-full">
        <div className="flex flex-row  h-full">
          {/* Left side - Calendar Demo */}
          <div className="bg-[#ebf2f0] flex-1 rounded-2xl p-4 text-gray-800 mr-2 flex flex-col h-full">
            {/* <div className="flex items-center gap-4 mb-4">
            <Image
              src={frLogo}
              alt="Farminsta"
              className="h-10"
            />
          </div> */}
            <div className="flex-grow flex-1 ">
              <iframe
                src={meetingUrl}
                className="w-full h-full"
                title="HubSpot Meeting"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right side - Company Logos */}
          {/* <div className="bg-[#ebf2f0] rounded-2xl p-4 shadow-lg flex flex-2 flex-col h-full">
            <h2 className="text-center font-bold text-2xl mb-6 text-gray-800">
              Trusted By
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 flex-grow overflow-y-auto">
              {logoImages.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center"
                >
                  <div className="w-full flex items-center justify-center">
                    <Image
                      src={logo}
                      alt={`Logo ${index + 1}`}
                      className="w-[60px] h-[60px] max-w-[80px] object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      {/* Bottom Section */}
      {/* <div className="pt-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our team is here to help you.</h2>
            <p className="text-xl text-gray-600">Get in touch with us for any questions or concerns.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <a
              href="https://maps.app.goo.gl/vkuXiSKpzC1JgVWd7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-white">
                <div className="bg-[#ebf2f0] p-4 rounded-full shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>

                <div className="text-left">
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">Our Address</h3>
                  <p className="text-gray-700 mb-1">Hyderabad</p>
                  <p className="text-gray-500 text-sm">India, 500049</p>
                </div>
              </div>
            </a>
            <a
              href='tel:+91 99499 99499'
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
            <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-white">
              <div className="bg-[#ebf2f0] p-4 rounded-full shrink-0">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-xl mb-2 text-gray-900">Contact Info</h3>
                <p className="text-gray-700 mb-1">Give us a call</p>
                <p className="text-gray-500 text-sm">+91 77 99 888 645</p>
              </div>
            </div>
            </a>
            <a
              href="mailto:contact@farminsta.com"
              className="inline-block"
            >
            <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-white">
              <div className="bg-[#ebf2f0] p-4 rounded-full shrink-0">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-xl mb-2 text-gray-900">Email Us</h3>
                <p className="text-gray-700 mb-1">Send your Queries</p>
                <p className="text-gray-500 text-sm">contact@farminsta.com</p>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div> */}
    </div>
  )
}



const page = () => {
  return (
    <div>
      <Header />
      <ScheduleDemo />
      <Footer />
    </div>
  )
}

export default page