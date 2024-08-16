import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledWatchContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`

const WatchBox = styled.div`
    width: 500px;
    height: 40vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-style: preserve-3d;
    transfrom: rotateX(0deg) rotateY(0deg);
    perspective: 1000px;
`
const TimeBlock = styled.div<{$X?: number, shadow?: string, clr?: string}>`
    position: absolute;
    font-size: 100px;
    text-shadow: ${props => props.shadow ? props.shadow : "1px 1px 5px aqua"};
    text-align: center; 
    transform: ${props => props.$X ? `translateZ(-50px) translateX(${props.$X}px) rotateY(-45deg) rotateZ(10deg) rotateX(-20deg)` :
                                     "translateZ(-50px) rotateY(-45deg) rotateZ(10deg) rotateX(-20deg)"}  ;
    color: ${props => props.clr ? props.clr : "#c7c7c7"};
    letter-spacing: -7px;
`

const TimeBlockShadow = styled(TimeBlock)`
    text-shadow: 2px 2px 10px aqua;
    font-size: 90px;
    transform: translateY(60px) translateX(10px) translateZ(81px) rotateY(-45deg) rotateZ(10deg) rotateX(-110deg);
    filter: blur(6px)
`

const Watch = () => {
    const [time, setTime] = useState((new Date()).toLocaleTimeString())

    useEffect(() => {
        setInterval(() => {
            setTime((new Date()).toLocaleTimeString())
        }, 1000)
    }, [])

    return ( 
        <>
            <StyledWatchContainer>
                <WatchBox>
                    <TimeBlock shadow={'1px 1px 8px aqua'} clr="white">{time}</TimeBlock>
                    <TimeBlock $X={4} shadow={'1px 1px 6px aqua'} clr="#6a6a6a">{time}</TimeBlock>
                    <TimeBlock $X={8} shadow={'none'} clr="#6a6a6a"  >{time}</TimeBlock>
                    <TimeBlockShadow>{time}</TimeBlockShadow>
                </WatchBox>
            </StyledWatchContainer>       
        </>
     );
}
 
export default Watch;