import React from 'react'
import {
  MyHead,
  MySection, MySocialLink, NewLabel, Layout
} from '../components'

const IconColumn = ({icons = [], ...props}) => <div className='d-flex flex-column text-center' {...props} >
  {new Array(20).fill(1).map((_, i) => <i className={`${
    icons[i % icons.length]
  } fa-4x text-light mb-5`} key={i} />)}
</div>

export default () => (
  <React.Fragment>
    <MyHead />
    <Layout
      main={
        <div className='d-flex flex-column justify-content-center h-100'>
          <h1 className='display-4 mb-4'>
            <span className='mr-3 d-inline-block animated rotateInUpLeft'>👋</span> I'm <strong>Denis Juma</strong>,<br /> A software wizard
          </h1>
          <p className='text-justify'>
          Nice to meet you! I'm a Senior Software Engineer at <a href='https://andela.com/'>Andela</a> by day
          and a Loving father by night. I'm currently seconded to work for <a href='https://www.angaza.com/'>Angaza</a> as a Software Engineer. My core duty there is to integrate mobile payments, bulk SMS (SMSC or SMS providers) and maintain  those integrations
          </p>
          <p className='text-justify'>
          When I'm not coding, I'm bussy mentoring aspiring software developers though <a href='http://teencodeafrica.com/'>Teencode Africa</a>, or writing awesome articles.
          Some of these articles are <a href='https://andela.com/uncategorized/demystifying-the-m-pesa-api-lipa-na-m-pesa-online-payment/'>Demistifying the M-Pesa API</a>, 
          <a href='https://medium.com/the-andela-way/data-structures-in-python-39629a5ee82d'>Python Data structures</a>, and <a href='https://medium.com/the-andela-way/creating-a-react-redux-app-that-consumes-an-api-from-development-to-production-part-1-f03c5cc86ba'>Setting up a React application</a>
          </p>

          <MySection text='Do you have a question or want to say hi?' cta='Message me' className='animated bounceInUp'>
            <MySocialLink href='deniskwanusu@gmail.com' color='#dd4b39' children={<i className='fas fa-at' title='email' />} />
            <MySocialLink href='https://m.me/dennis.kwanusu' color='#0084ff' children={<i className='fab fa-facebook-messenger' title='Messenger' />} />
          </MySection>

          <MySection text='Wondering what I do in my spare time?' ctas={[{
            cta: 'Review my code',
            children: <React.Fragment>
              <MySocialLink href='https://github.com/kwahalf' color='#333' children={<i className='fab fa-github' title='github' />} />
              <MySocialLink href='https://stackoverflow.com/users/9126434/kwahalf' color='#f48024' children={<i className='fab fa-stack-overflow' title='stack-overflow' />} />
              {/* <MySectionLink href='' children={<i className='fab fa-' title='' />} /> */}
            </React.Fragment>
          }, {
            cta: 'Read my writing',
            children: <React.Fragment>
              <MySocialLink href='https://medium.com/@Kwahalf' color='#000' children={
              <span className='position-relative'>
              <i className='fab fa-medium' title='medium' />
              <NewLabel />
              </span>
              } />
              <MySocialLink href='https://twitter.com/dennisjuma' color='#1da1f2' children={<i className='fab fa-twitter' title='twitter' />} />
            </React.Fragment>
          },]} className='animated bounceInUp delay-1' />

          <MySection text='Looking to hire a Software Developer?' cta='You can check my work experience' className='animated bounceInUp delay-2' >
            <MySocialLink href='https://www.linkedin.com/in/denis-juma/' color='#0077b5' children={<i className='fab fa-linkedin' title='linkedin' />} />
            <MySocialLink href='/resume' color='#000' children={<i className='far fa-file' title='resume' />} />
          </MySection>

          <MySection text='Curious what my life is like?' cta='See here' className='animated bounceInUp delay-3' >
            <MySocialLink href='https://facebook.com/dennis.kwanusu' color='#3b5998' children={<i className='fab fa-facebook' title='facebook' />} />
            <MySocialLink href='https://instagram.com/dennisjuma' color='#e1306c' children={<i className='fab fa-instagram' title='instagram' />} />
          </MySection>
        </div>
      }

      aside={
        <React.Fragment>
          <img src='/static/images/half-size-deno.png'
            className='d-block mx-auto mw-100 z-index-2 mt-auto'
            alt='half-size photo of Denis Juma'
            style={{
              filter: 'drop-shadow(8px 16px 16px rgba(0,0,0,0.25))'
            }} />
          <div className='position-absolute z-index-1 w-100 d-flex justify-content-between' style={{
            fontSize: 'calc(5vw*0.6)'
          }}>
            <IconColumn
              style={{
                animation: 'mover linear 30s infinite  alternate'
              }}
              icons={[
                'fas fa-terminal', 'fab fa-node', 'fas fa-sitemap', 'fab fa-aws', 'fas fa-project-diagram']} />
            <IconColumn
              style={{
                animation: 'mover linear 30s infinite  alternate-reverse'
              }}
              icons={[
                'fab fa-js', 'fab fa-css3', 'fab fa-html5', 'fas fa-code', 'fas fa-code-branch', 'fas fa-file-code'
              ]} />
          </div>
        </React.Fragment>
      } />
  </React.Fragment>
)
