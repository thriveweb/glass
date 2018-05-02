import React from 'react'
import Helmet from 'react-helmet'

import Banner from '../components/Banner'
import ImageGallery from '../components/ImageGallery'
import SectionAbout from '../components/SectionAbout'
import SectionTestimonials from '../components/SectionTestimonials'
import SectionColumns from '../components/SectionColumns'
import FeaturedPosts from '../components/FeaturedPosts'
import SectionPartners from '../components/SectionPartners'

export default ({ page, globalSettings, posts, postCategories, selectedCategory }) => {
  const { featuredImage, title, subTitle, content, buttonText, buttonUrl, gallery, about, testimonials, featuredBlog } = page
  const { partners, columns } = globalSettings

  console.log(featuredBlog)

  return (
    <main className='Home'>
      <Banner 
        image={featuredImage}
        subHeading={subTitle}
        heading={title} 
        content={content} 
        buttonText={buttonText} 
        buttonUrl={buttonUrl} 
      />
      <ImageGallery
        title={gallery.title}
        subTitle={gallery.subTitle}
        galleryItems={gallery.galleryImages} 
      />
      <SectionAbout 
        image={about.image} 
        title={about.title} 
        subTitle={about.subTitle} 
        content={about.content} 
        buttonText={about.buttonText} 
        buttonUrl={about.buttonUrl} 
      />
      <SectionTestimonials
        title={testimonials.title}
        testimonials={testimonials.testimonial}
      />
      <SectionColumns
        columns={columns}
      />
      <FeaturedPosts
        title={featuredBlog.title}
        subTitle={featuredBlog.subTitle}
        blogPosts={featuredBlog.blogPosts}
        posts={posts}
        postCategories={postCategories}
      />
      <SectionPartners
        partners={partners} 
      />
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </main>
  )
}

