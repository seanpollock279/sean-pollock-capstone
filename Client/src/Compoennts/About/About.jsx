import react from 'react';
import Header from '../Header/Header';

function About () {
    return (
        <div>
            <Header />
            <div className="aboutInfo">
                <img className="aboutInfo__profile" src="" alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magni in sapiente doloribus odio ipsum pariatur sunt ducimus! Iure odit itaque et asperiores tempore aliquid vero officiis laboriosam unde aperiam.Necessitatibus provident libero doloremque deleniti unde possimus consequuntur maxime explicabo perferendis error corrupti accusamus commodi, enim delectus nisi fuga dolorem ut adipisci voluptatum veniam accusantium dolore similique facere cupiditate. Minima?</p>
            </div>
            <div className="aboutInfo__tools">
                <img className="aboutInfo__tool" src="" alt=""/>
                <img className="aboutInfo__tool" src="" alt=""/>
                <img className="aboutInfo__tool" src="" alt=""/>
                <img className="aboutInfo__tool" src="" alt=""/>
            </div>
        </div>
    )
}

export default About;