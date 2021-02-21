import React, {useEffect} from 'react'
import AOS from 'aos'
import Head from 'next/head'
import Image from 'next/image'
import Rating from '../components/Rating'
import Timeline from '../components/Timeline'

const CV = () => {
  const age = Math.floor(
    (new Date() - new Date('1991-07-11').getTime()) / 3.15576e10,
  )
  const technologies = [
    {name: 'React', numberOfStars: 3},
    {name: 'Angular', numberOfStars: 2},
    {name: 'JS', numberOfStars: 3},
    {name: 'HTML', numberOfStars: 5},
    {name: 'CSS', numberOfStars: 2},
    {name: 'CI/CD', numberOfStars: 3},
    {name: 'AWS', numberOfStars: 3},
    {name: 'Java', numberOfStars: 1},
    {name: 'PHP', numberOfStars: 1},
    {name: 'Python', numberOfStars: 1},
  ]
  const experiences = [
    {
      text: 'Senior Software Engineer at Adobe - Austin, TX',
      date: 'April 2019 - now',
    },
    {
      text: 'Software Engineer at Hewlett Packard Enterprise - Dallas, TX',
      date: 'April 2017 - April 2019',
    },
    {
      text: 'Software Engineer at Securonix - Dallas, TX',
      date: 'June 2015 - April 2017',
    },
  ]
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <>
      <Head>
        <title>Personal Blog</title>
      </Head>
      <section id="cv" className="dark:bg-lightgrey dark:text-whitedarktheme">
        <div className="container py-12 mx-auto grid grid-cols-1 sm:grid-cols-3 sm:gap-16">
          <div className="col-span-1 mx-6 sm:mx-0">
            <div className="text-center">
              <Image
                className="rounded-full justify-center"
                loading="eager"
                priority
                alt="Profile picture"
                src="/profile.jpg"
                width={320}
                height={320}
              />
            </div>
          </div>
          <div className="col-span-1 mx-6 mt-6 sm:mt-0 sm:mx-0 sm:col-span-2 flex flex-col justify-center"></div>
          <div className="col-span-1 mx-6 mt-6 sm:mt-0 sm:mx-0">
            <Rating title="Technologies" elements={technologies}></Rating>
          </div>
          <div className="col-span-1 mx-6 mt-6 sm:mt-0 sm:mx-0 sm:col-span-2">
            <h2 className="mb-4">Experience</h2>
            <Timeline experiences={experiences} />
          </div>
        </div>
      </section>
    </>
  )
}

export default CV
