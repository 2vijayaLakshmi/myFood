
import {useState} from "react";

const Section = ({title,description, isVisible, setIsVisible}) =>{
    return (
        <div style={{border:"1px solid black", margin: "2px"}}>
            <h3>{title}</h3>
            {
                isVisible? <button onClick={()=>{
                    setIsVisible(false)
                }}>Hide
                </button> :<button onClick={()=>{
                setIsVisible(true)
            }}>Show
            </button>
            }

            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart = ()=> {
    const [visibleSection, setVisibleSection] = useState("about");
    return (
    <div>
        <h1 style={{font: "bold"}}>Instamart</h1>
        <Section title={"About Instamart"} description={"This is about of Intamart"} isVisible={visibleSection === "about"} 
                setIsVisible={()=> setVisibleSection("about")}
                />
        <Section title={"Team Instamart"} description={"In literary theory, a text is any object that can be, whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informative message"} isVisible={visibleSection === "team"}
                setIsVisible={()=> setVisibleSection("team")}
        />
        <Section title={"carrers"} description={"In literary theory, a text is any object that can be, whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informative message"} isVisible={visibleSection === "carrers"}
                setIsVisible={()=> setVisibleSection("carrers")}
        />
    </div>
    )
}

export default Instamart;
