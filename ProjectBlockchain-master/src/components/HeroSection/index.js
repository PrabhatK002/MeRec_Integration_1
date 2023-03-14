import React from 'react';
import {Button} from '../ButtonElement'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg,  VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HeroElements';

const HeroSection = () => {
    // const [hover , setHover] = useState(false)

    // const onHover = () => {
    //     setHover(!hover)
    // }
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoplay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Medical Record Storage and Management System using Blockchain</HeroH1>
            {/* <HeroP>
                Signup for new registration !!!
            </HeroP> */}
            {/* <HeroBtnWrapper>
                {/* <Button to='signup'>
                    Get started
                </Button> */}
            {/* </HeroBtnWrapper> */} 
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;