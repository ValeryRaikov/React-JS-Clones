import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TitleCards from '../title-cards/TitleCards';

import back_arrow_icon from '../../assets/back_arrow_icon.png';

export default function Browse() {
    const navigate = useNavigate();
    const [language, setLanguage] = useState('en-US');
    const [countryName, setCountryName] = useState('United States');

    const changeHandler = function(e) {
        setLanguage(e.target.value);
        setCountryName(e.target.selectedOptions[0].getAttribute('name'));
    }

    return (
        <div className="library">
            <div className="library-top">
                <img onClick={() => navigate('/')} src={back_arrow_icon} alt="" />
                <h1>Select your language preference</h1>
            </div>
            <div className="browse-select">
            <select value={language} onChange={changeHandler}>
                <option name="Afrikaans" value="af">Afrikaans</option>
                <option name="Albanian" value="sq">Albanian</option>
                <option name="Arabic (Saudi Arabia)" value="ar-SA">Arabic (Saudi Arabia)</option>
                <option name="Armenian" value="hy-AM">Armenian</option>
                <option name="Azerbaijani" value="az-AZ">Azerbaijani</option>
                <option name="Bengali (Bangladesh)" value="bn-BD">Bengali (Bangladesh)</option>
                <option name="Bosnian" value="bs-BA">Bosnian</option>
                <option name="Bulgarian" value="bg-BG">Bulgarian</option>
                <option name="Burmese" value="my-MM">Burmese</option>
                <option name="Chinese (Mandarin)" value="zh-CN">Chinese (Mandarin)</option>
                <option name="Croatian" value="hr-HR">Croatian</option>
                <option name="Czech" value="cs-CZ">Czech</option>
                <option name="Danish" value="da-DK">Danish</option>
                <option name="Dutch" value="nl-NL">Dutch</option>
                <option name="English (United States)" value="en-US">English (United States)</option>
                <option name="English (United Kingdom)" value="en-GB">English (United Kingdom)</option>
                <option name="Estonian" value="et-EE">Estonian</option>
                <option name="Finnish" value="fi-FI">Finnish</option>
                <option name="French" value="fr-FR">French</option>
                <option name="German" value="de-DE">German</option>
                <option name="Greek" value="el-GR">Greek</option>
                <option name="Hebrew" value="he-IL">Hebrew</option>
                <option name="Hindi" value="hi-IN">Hindi</option>
                <option name="Hungarian" value="hu-HU">Hungarian</option>
                <option name="Icelandic" value="is-IS">Icelandic</option>
                <option name="Indonesian" value="id-ID">Indonesian</option>
                <option name="Italian" value="it-IT">Italian</option>
                <option name="Japanese" value="ja-JP">Japanese</option>
                <option name="Korean" value="ko-KR">Korean</option>
                <option name="Latvian" value="lv-LV">Latvian</option>
                <option name="Lithuanian" value="lt-LT">Lithuanian</option>
                <option name="Malay" value="ms-MY">Malay</option>
                <option name="Norwegian" value="no-NO">Norwegian</option>
                <option name="Polish" value="pl-PL">Polish</option>
                <option name="Portuguese" value="pt-PT">Portuguese</option>
                <option name="Romanian" value="ro-RO">Romanian</option>
                <option name="Russian" value="ru-RU">Russian</option>
                <option name="Serbian" value="sr-RS">Serbian</option>
                <option name="Spanish" value="es-ES">Spanish</option>
                <option name="Swedish" value="sv-SE">Swedish</option>
                <option name="Thai" value="th-TH">Thai</option>
                <option name="Turkish" value="tr-TR">Turkish</option>
                <option name="Ukrainian" value="uk-UA">Ukrainian</option>
                <option name="Vietnamese" value="vi-VN">Vietnamese</option>
            </select>
            </div>
            <h1 className="text">Showing: <span>{countryName}</span></h1>
            <div className="tv-shows">
                <h1>Tv Shows:</h1>
                <TitleCards title='Tv Series airing today' category='airing_today' type='tv' language={language} />
                <TitleCards title='Most popular' category='popular' type='tv' language={language} />
                <TitleCards title='Top rated' category='top_rated' type='tv' language={language} />
            </div>
            <div className="movies">
                <h1>Movies:</h1>
                <TitleCards title='Movies on the screen' category='now_playing' type='movie' language={language} />
                <TitleCards title='Most popular' category='popular' type='movie' language={language} />
                <TitleCards title='Top rated' category='top_rated' type='movie' language={language} />
            </div>
        </div>
    );
}
