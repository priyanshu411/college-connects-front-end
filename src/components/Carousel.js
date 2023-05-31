import { useEffect, useRef } from 'react';

function Carousel() {
    const MRef = useRef(null);

    useEffect(() => {
        MRef.current = window.M;
        var elems = document.querySelectorAll('.carousel');
        MRef.current.Carousel.init(elems,{indicators:true});
    }, []);

    return (
        <>
            <div className="carousel carousel-slider">
                <a className="carousel-item" href="#one!"><img src='https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='img'/></a>
                <a className="carousel-item" href="#two!"><img src='https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80' alt='img'/></a>
                <a className="carousel-item" href="#three!"><img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt='img'/></a>
                <a className="carousel-item" href="#four!"><img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt='img'/></a>
            </div>
        </>
    );
}

export default Carousel;
