import './footer.css'
import facebook from './assets/social1.png';
import instagram from './assets/social2.png';
import vk from './assets/social3.png';
import linkedin from './assets/social4.png';

export const Footer = () => (
    <div className="footer">
            <div className="copyrights">
            © 2020-2023 Cleverland. Все права защищены.
            </div>
            <div className="socials">
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={vk} alt="vk" />
                <img src={linkedin} alt="linkedin" />
            </div>
        </div>
);