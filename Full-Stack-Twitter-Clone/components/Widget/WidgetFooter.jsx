// footer da yazılar ve yönlendirme linkleri
import React from 'react';

const WidgetFooter = () => {
  return (
    <div className='tos mb-4  lg:w-[280px] xl:w-[320px]'>
      <nav className='flex flex-col items-center justify-center text-gray-500 text-xs'>
        <div className='flex flex-row space-x-2'>
          <a href='https://twitter.com/en/tos' target='_blank' className=' hover:underline'>
            <span>Terms of Service</span>
          </a>
          <a href='https://twitter.com/en/privacy' target='_blank'  className='hover:underline'>
            <span>Privacy Policy</span>
          </a>
          <a href='https://help.twitter.com/tr/rules-and-policies/twitter-cookies' target='_blank' className=' hover:underline'>
            <span>Cookie Policy</span>
          </a>
        </div>

        <div className='flex flex-row space-x-2'>
          <a href='https://help.twitter.com/tr/resources/accessibility' target='_blank' className='hover:underline'>
            <span>Accessibility</span>
          </a>
          <a href='https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo' target='_blank'  className='hover:underline '>
            <span>Ads info</span>
          </a>
          <a href='#' className=' hover:underline'>
            <span>More ...</span>
          </a>
        </div>

        <a href='#' className=' hover:underline'>
          © 2023 X Corp.
        </a>
      </nav>
    </div>
  );
};

export default WidgetFooter;
