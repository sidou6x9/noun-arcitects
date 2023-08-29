import React from "react";
import "./NosServices.css";
import NosServicesHero from "./NosServicesHero";
import { NavLink } from "react-router-dom";

function NosServices() {
  return (
    <div>
      <NosServicesHero />
      <div className="service-container">
        <div className="service-interieur ">
          <div className="pack-interieur">
            <h1>
              Découvrez notre Pack Intérieur : Créez l'espace de vos rêves
            </h1>
            <p>
              Que vous ayez un studio, un appartement de type T2 ou plus, notre
              Pack Intérieur est conçu pour vous offrir un ameublement complet
              et harmonieux.
              <br />
              <br /> Nous vous proposons une sélection soigneusement pensée de
              meubles et d'accessoires pour chaque zone de votre domicile.
              <br />
              <br />
              <b>Salon :</b> Transformez votre salon en un espace convivial et
              confortable avec notre canapé-lit, un tapis doux sous vos pieds,
              une table basse élégante, un guéridon pratique et un meuble TV
              moderne.
              <br />
              <br />
              Que vous souhaitiez vous détendre, recevoir des invités ou
              profiter d'une soirée cinéma, notre Pack Intérieur vous offre le
              cadre idéal.
              <br />
              <br />
              <b>Salle à manger :</b> Créez une ambiance accueillante pour les
              repas en famille ou les dîners entre amis grâce à notre sélection
              de tables, de chaises, de tabourets et de tabourets hauts.
              <br />
              <br /> Que ce soit pour un espace plus formel ou décontracté, nous
              avons les options qui s'adaptent à votre style et à vos besoins.
              <br />
              <br /> <b>Chambre à coucher :</b> Retirez-vous dans un espace de
              détente et de tranquillité avec notre armoire ou dressing
              extensible, accompagné de cintres et d'un panier à linge pratique.
              <br />
              <br /> Pour des nuits reposantes, notre Pack Intérieur inclut une
              literie complète comprenant une polaire de protection, un drap
              housse, une couette, une housse de couette, deux oreillers et
              leurs taies assorties.
              <br />
              <br /> Nous comprenons l'importance de l'harmonie et de la
              fonctionnalité dans chaque pièce de votre maison.
              <br />
              <br /> C'est pourquoi nous avons soigneusement sélectionné chaque
              meuble et accessoire pour répondre à vos besoins esthétiques et
              pratiques.
              <br />
              <br />
              Avec notre Pack Intérieur, vous pouvez créer des espaces qui
              reflètent votre style et qui vous permettent de profiter
              pleinement de votre domicile.
            </p>
          </div>
        </div>
        <div className="service-interieur ">
          <div className="pack-accesoire">
            <h1>
              Découvrez nos Accessoires : Complétez votre espace avec style
            </h1>
            <p>
              Pour compléter votre intérieur et apporter la touche finale à
              votre décoration, notre sélection d'accessoires est là pour
              répondre à vos besoins.
              <br />
              <br /> Nous vous offrons une gamme variée d'accessoires pratiques
              et esthétiques pour chaque espace de votre domicile.
              <br />
              <br /> Cuisine : Simplifiez votre quotidien avec notre collection
              d'accessoires de cuisine.
              <br />
              <br /> Des poubelles pratiques de 30 litres, un égouttoir, des
              patères pour suspendre vos ustensiles, des torchons et des gants
              de cuisine, des sets de table et des napperons élégants, une
              corbeille, une ménagère complète et un distributeur de savon.
              <br />
              <br /> Tout est pensé pour faciliter vos tâches quotidiennes et
              ajouter une touche de style à votre cuisine.
              <br />
              <br /> Vaisselle : Servez vos repas avec élégance grâce à notre
              sélection d'assiettes, de bols, de tasses, de tasses à café, de
              verres et de verres à vin.
              <br />
              <br /> Complétez votre table avec une ménagère de 24 pièces, des
              boîtes de rangement pratiques, des saladiers et une verrerie
              assortie.
              <br />
              <br /> Avec notre vaisselle, chaque repas devient une expérience
              raffinée.
              <br />
              <br /> Petit électroménager : Équipez votre maison avec les
              appareils essentiels.
              <br />
              <br /> Découvrez notre gamme de machines à café, de bouilloires,
              de grille-pains, de fers à repasser, de tables à repasser,
              d'aspirateurs et de télévisions. de télévisions.
              <br /> Ces petits électroménagers allient fonctionnalité et
              design, ajoutant une touche de modernité à votre intérieur.
              <br />
              <br /> Ustensiles : Cuisinez avec aisance grâce à notre sélection
              d'ustensiles de cuisine de qualité.
              <br />
              <br /> Des poêles, des couvercles, des faitouts, des casseroles,
              des passoires, un verre doseur, des ustensiles en plastique, un
              bloc couteaux, un couteau céramique et un éplucheur, des ciseaux,
              un fouet, un ouvre-boîte et une planche à découper.
              <br />
              <br /> Tout ce dont vous avez besoin pour préparer vos repas avec
              facilité.
              <br />
              <br /> Nous comprenons l'importance des petits détails pour créer
              une ambiance chaleureuse et personnalisée dans votre maison.
              <br />
              <br /> C'est pourquoi nous avons soigneusement sélectionné chaque
              accessoire pour sa qualité, sa fonctionnalité et son esthétique.
              <br />
              <br /> Ajoutez une touche finale à votre intérieur et faites de
              votre espace un lieu qui vous ressemble.
              <br />
              <br />
              N'attendez plus pour compléter votre décoration avec nos
              accessoires.
              <br />
              <br /> Contactez-nous dès aujourd'hui pour en savoir plus et
              découvrir comment nos accessoires peuvent apporter une touche de
              style à votre domicile.
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className="contact-section-container">
          <div className="contact-section-container1">
            <h2>Besoin de plus d'infos?</h2>

            <p>
              Contactez-nous dès aujourd'hui pour en savoir plus et découvrir
              comment nos accessoires peuvent apporter une touche de style à
              votre domicile.
            </p>
            <br />
            <NavLink className="contact-hero-link" to="/contactUs">
              Nous contacter
            </NavLink>
          </div>
          <div className="contact-section-container2"></div>
        </div>
        <div className="service-interieur ">
          <div className="pack-electromenager">
            <h1>ÉQUIPEMENTS ÉLECTROMÉNAGERS</h1>
            <br />
            <h3>STUDIO</h3>
            <br />
            <ul>
              <li>
                Lave-linge séchant pour un entretien pratique de votre linge.
              </li>
              <li>Petit réfrigérateur pour conserver vos aliments frais.</li>
              <li>Plaques de cuisson pour préparer de délicieux repas.</li>
              <li>
                Hotte casquette avec filtre à charbon pour une ventilation
                efficace.
              </li>
              <li>
                Micro-ondes encastrable pour réchauffer et cuisiner rapidement.
              </li>
            </ul>
            <br />
            <h3>T2</h3>
            <br />
            <ul>
              <li>
                Lave-linge séchant pour faciliter votre routine de lessive.
              </li>
              <li>Grand réfrigérateur pour stocker vos provisions.</li>
              <li>Plaques de cuisson pour préparer de savoureux plats.</li>
              <li>
                Hotte casquette avec filtre à charbon pour éliminer les odeurs.
              </li>
              <li>
                Micro-ondes encastrable pour une cuisson rapide et pratique.
              </li>
            </ul>
            <br />
            <h3>Du T3 au T5</h3> <br />
            <ul>
              <li>
                Lave-linge hublot pour une capacité de lavage plus importante.
              </li>
              <li>
                Grand réfrigérateur pour répondre à vos besoins de stockage.
              </li>
              <li>Four pour des cuissons variées et savoureuses.</li>
              <li>
                Lave-vaisselle pour simplifier le nettoyage de vos ustensiles.
              </li>
              <li>Plaques de cuisson pour une cuisson précise et efficace.</li>
              <li>
                Hotte casquette avec filtre à charbon pour éliminer les vapeurs
                et les odeurs.
              </li>
              <li>
                Micro-ondes encastrable pour une cuisine rapide et pratique.
              </li>
            </ul>
            <br />
            <h3>Du T6 au T7</h3>
            <br />
            <ul>
              <li>Lave-linge hublot pour une grande capacité de lavage.</li>
              <li>
                Deux grands réfrigérateurs pour répondre à vos besoins de
                stockage.
              </li>
              <li>Four pour des cuissons polyvalentes.</li>
              <li>
                Lave-vaisselle pour un nettoyage facile de votre vaisselle.
              </li>
              <li>Plaques de cuisson pour cuisiner avec précision.</li>
              <li>
                Hotte casquette avec filtre à charbon pour une ventilation
                optimale.
              </li>
              <li>
                Micro-ondes encastrable pour une cuisine rapide et efficace.
              </li>
            </ul>
          </div>
          <div className="pack-electromenager">
            <h1>Tarifs</h1>
            <br />
            <div className="tarifs">
              <div className="prices">
                <h2>Studio</h2>
                <br />
                <p>
                  Pack ameublement
                  <br />
                  2700€ TTC
                </p>
                <br />
                <ul>
                  <li>Étude & conception</li>
                  <li>Logistique & livraison</li>
                  <li>installation & montage </li>
                </ul>
                <br />
                <p>Total 2700€ TTC</p>
                <ul>
                  <br />
                  <li>Option</li>
                  <li>électroménager </li>
                </ul>
              </div>
              <div className="prices">
                <h2>T2</h2>
                <br />
                <p>
                  Pack ameublement
                  <br />
                  4300€ TTC
                </p>
                <br />
                <ul>
                  <li>Étude & conception</li>
                  <li>Logistique & livraison</li>
                  <li>installation & montage </li>
                </ul>
                <br />
                <p>Total 5350€ TTC</p>
                <ul>
                  <br />
                  <li>Option</li>
                  <li>électroménager </li>
                </ul>
              </div>
              <div className="prices">
                <h2>T3</h2>
                <br />
                <p>
                  Pack ameublement
                  <br />
                  5500€ TTC
                </p>
                <br />
                <ul>
                  <li>Étude & conception</li>
                  <li>Logistique & livraison</li>
                  <li>installation & montage </li>
                </ul>
                <br />
                <p>Total 6840€ TTC</p>
                <ul>
                  <br />
                  <li>Option</li>
                  <li>électroménager </li>
                </ul>
              </div>
              <div className="prices">
                <h2>T4</h2>
                <br />
                <p>
                  Pack ameublement
                  <br />
                  7560€ TTC
                </p>
                <br />
                <ul>
                  <li>Étude & conception</li>
                  <li>Logistique & livraison</li>
                  <li>installation & montage </li>
                </ul>
                <br />
                <p>Total 8970€ TTC</p>
                <ul>
                  <br />
                  <li>Option</li>
                  <li>électroménager </li>
                </ul>
              </div>
              <div className="prices">
                <h2>T5</h2>
                <br />
                <p>
                  Pack ameublement
                  <br />
                  8290€ TTC
                </p>
                <br />
                <ul>
                  <li>Étude & conception</li>
                  <li>Logistique & livraison</li>
                  <li>installation & montage </li>
                </ul>
                <br />
                <p>Total 9290€ TTC</p>
                <ul>
                  <br />
                  <li>Option</li>
                  <li>électroménager </li>
                </ul>
              </div>
              <div className="prices">
                <h2>T6</h2>
                <br />
                <p>
                  Pack ameublement
                  <br />
                  9496€ TTC
                </p>
                <br />
                <ul>
                  <li>Étude & conception</li>
                  <li>Logistique & livraison</li>
                  <li>installation & montage </li>
                </ul>
                <br />
                <p>Total 11692€ TTC</p>
                <ul>
                  <br />
                  <li>Option</li>
                  <li>électroménager </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NosServices;
