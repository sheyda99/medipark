import React from 'react';
import Banner from '../components/Banner';

const About = () => {
  return (
    <main>
      <Banner imageUrl="https://www.medipark.az/_next/static/media/about.af8bb371.webp" text="Haqqımızda" />
      <div className='container about-text'>
        <p>Medipark Klinik Xəstəxana olaraq yeni fəaliyyətə başlasa da, hədəflərimiz böyükdür, məqsədimiz hər bir vətəndaşımıza yaxın olmaqdır. Sloqanımız məqsədimizdən xəbər verir: Sağlamlığa bizimlə qovuşun. Hədəfimiz sağlam qalmağınız üçün profilaktik müayinələrlə sizin dostunuza çevrilməkdir. Medipark Klinik Xəstəxana daxildə altı şöbədən ibarətdir. Onlardan Poliklinika, Terapiya və Laboratoriya şöbələri fəaliyyətə başlayıb. Əlavə olaraq ən müasir standartlara cavab verən laboratoriyamız siz gələ bilməsəniz belə ünvanda sizdən nümunə götürmək üçün səyyar xidmətlə təhciz olunmuşdur. Tezliklə təqdim olunacaq Radiologiya şöbəmiz regionda ilk olan xidmətlərlə ən son həll yollarına cavab verəcək şəkildə fəaliyyət göstərəcək. Bundan başqa qısa zaman kəsiyində Cərrahiyyə və Acil şöbələrimiz də sizlərin istifadəsinə təqdim olunacaq.</p>
      </div>
    </main>
  )
}

export default About;