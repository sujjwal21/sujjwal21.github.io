import { useMemo,useCallback } from "react";
import Particles from "react-particles";
// import { loadFull } from "tsparticles";
import {loadSlim} from "tsparticles-slim"

const TsParticles = () => {
    const option =useMemo(()=>{
        return {
            background: {
                color: {
                    value: "#0d47a1",
                },
            },
            fullScreen:{
                enable:false

            },
            // fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode:"repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 2,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 200,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: {min:1,max:4},
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }

    },[])
    const particlesInit = useCallback(engine => {
        loadSlim(engine)
    }, []);

    return (
        <Particles init={particlesInit} options={option}/>
    );
};

export default TsParticles;