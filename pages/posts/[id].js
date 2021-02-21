import React from 'react'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Link from 'next/link'
import Head from 'next/head'
import Date from '../../components/date'
import Image from 'next/image'

import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({params}) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Post({postData}) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <section
        id="blog"
        className="min-h-screen-without-nav blog pt-20 dark:bg-lightgrey dark:text-whitedarktheme"
      >
        <div className="text-center">
          <Image
            className="rounded-full justify-center"
            loading="eager"
            priority
            alt="Profile picture"
            src="/profile.jpg"
            width={150}
            height={150}
          />
        </div>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <br />
          <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
        </article>
        <br />
        <h2>
          <Link href="/">
            <a className={utilStyles.link}>← Back to home</a>
          </Link>
        </h2>
      </section>
    </>
  )
}
