import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import './projects.css'
const Projects = () => {
    // const [toggleState, setToggleState] = useState();

    // const { data: categories, isLoading } = useQuery({
    //     queryKey: ['category'],
    //     queryFn: () => fetch('http://localhost:5000/category')
    //         .then(res => res.json())
    // })
    // if (isLoading) {
    //     return <h2>Loading....</h2>
    // }

    // const toggleTab = (index) => {
    //     setToggleState(index);
    // };

    // return (
    //     <div className="container">
    //         <div className="bloc-tabs">
    //             {
    //                 categories.map((category, i) => <button
    //                     className={toggleState === i ? "tabs active-tabs" : "tabs"}
    //                     onClick={() => toggleTab(i)}
    //                 >
    //                     {category.category} {i}
    //                 </button>)
    //             }

    //             <button
    //                 className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
    //                 onClick={() => toggleTab(2)}
    //             >
    //                 Tab 2
    //             </button>
    //             <button
    //                 className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
    //                 onClick={() => toggleTab(3)}
    //             >
    //                 Tab 3
    //             </button>
    //         </div>

    //         <div className="content-tabs">
    //             <div
    //                 className={toggleState === 1 ? "content  active-content" : "content"}
    //             >
    //                 <h2>Content 1</h2>
    //                 <hr />
    //                 <p>
    //                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
    //                     praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
    //                     vel voluptatum?
    //                 </p>
    //             </div>

    //             <div
    //                 className={toggleState === 2 ? "content  active-content" : "content"}
    //             >
    //                 <h2>Content 2</h2>
    //                 <hr />
    //                 <p>
    //                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
    //                     voluptatum qui adipisci.
    //                 </p>
    //             </div>

    //             <div
    //                 className={toggleState === 3 ? "content  active-content" : "content"}
    //             >
    //                 <h2>Content 3</h2>
    //                 <hr />
    //                 <p>
    //                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
    //                     nostrum rerum laudantium totam unde adipisci incidunt modi alias!
    //                     Accusamus in quia odit aspernatur provident et ad vel distinctio
    //                     recusandae totam quidem repudiandae omnis veritatis nostrum
    //                     laboriosam architecto optio rem, dignissimos voluptatum beatae
    //                     aperiam voluptatem atque. Beatae rerum dolores sunt.
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default Projects;