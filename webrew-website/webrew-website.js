// ------------------------------------------------------------------------------------------------------------------------------------------
// Imports
// ------------------------------------------------------------------------------------------------------------------------------------------
import { PolymerElement, html } from '../node_modules/@polymer/polymer/polymer-element.js'


// ------------------------------------------------------------------------------------------------------------------------------------------
// Declaration
// ------------------------------------------------------------------------------------------------------------------------------------------
export default class WebrewWebsite extends PolymerElement {


    // ------------------------------------------------------------------------------------------------------------------------------------------
    // Template
    // ------------------------------------------------------------------------------------------------------------------------------------------
    static get template() {
        return html`
            <style>
                :host {
                    display: flex;
                    height: 100%;


                }
                header {
                    flex-shrink: 0;
                    flex-basis: 20rem;
                    
                    
                    background: deeppink;
                } 
                article {
                    display: flex;
                    flex-direction: row;
                    height: 100%;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    flex-grow: 1;
                    
                    
                    background: tomato;
                }
                
                main {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: row;


                    background: white;
                }

                footer {
                    background: seagreen;
                }
                
                h1, p {
                    padding: 1rem;
                    max-width: 400px;
                }
            </style>
            <header>header</header>
            <article>
            <main>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam impedit, quae a quos eius nisi mollitia ea cupiditate enim, esse illo optio unde sequi aliquid? Recusandae exercitationem commodi unde magni?</div>
                <div>Mollitia, cumque consequuntur saepe inventore tempora ut blanditiis natus fuga sapiente neque recusandae quidem necessitatibus? Consequatur eum, nisi quibusdam numquam ratione, blanditiis nesciunt eligendi est quia et molestiae! Doloribus, dolorem.</div>
                <div>Aut tempora sequi corrupti ut eos ratione iste, quis vel recusandae architecto commodi vero molestias odit possimus eveniet magnam. Veniam quasi totam delectus recusandae expedita eos quo ut quam sit.</div>
                <div>Nam, labore voluptates exercitationem dolor vel debitis minima corporis optio voluptate dicta ad ipsa laboriosam, commodi voluptatem velit. Illum tenetur cum aliquid rerum suscipit! Nesciunt cum perspiciatis eaque reiciendis nemo?</div>
                <div>Placeat cupiditate neque, sequi nisi eius nobis ipsa architecto tempore dicta distinctio, animi, sunt quas beatae doloremque sit eligendi nostrum error omnis sint. Tempora eaque maiores sed, eveniet aliquam facilis.</div>
                <div>Aspernatur omnis porro id incidunt rerum, assumenda voluptatem tempora in praesentium reprehenderit dolor fuga magnam, fugit ut molestiae. Ipsum repellendus quod doloremque vitae, earum nesciunt animi nam assumenda veniam ad!</div>
                <div>Mollitia molestiae a quae! Suscipit sapiente at hic recusandae error debitis praesentium asperiores exercitationem laudantium doloribus perspiciatis quaerat possimus aspernatur ullam dolor molestias, quam eligendi fugiat aliquam ex eveniet facilis.</div>
                <div>Beatae similique est consectetur reiciendis ipsam quibusdam earum debitis magnam. Amet ratione laborum dolor! Recusandae, sint! Nostrum, itaque facere eos magnam consequuntur fugiat deserunt iusto, asperiores earum a aliquam perspiciatis!</div>
                <div>Praesentium neque ex adipisci laborum quos odio architecto consequuntur, voluptas odit unde maxime error minus accusantium, voluptatibus provident repellendus tenetur dignissimos magnam alias nihil ea dolore! Facilis repudiandae eum beatae!</div>
                <div>Dolorum nam voluptatum architecto quam, vitae labore placeat. Possimus illo asperiores, earum cupiditate nisi mollitia accusantium modi commodi. Provident quisquam explicabo at, nam nostrum dolorum cum eum nobis odio voluptates.</div>
                <div>Distinctio, deserunt provident? Sint laborum voluptatem ab aliquam, distinctio rem aliquid molestiae expedita cum repellat nulla. Doloremque autem odio maiores incidunt ipsa vero praesentium culpa! Aperiam voluptates nihil minima aut.</div>
                <div>Dignissimos dolorem, minima deleniti rem sapiente unde cum assumenda harum optio asperiores suscipit deserunt earum cumque tempore vero corrupti sit rerum animi. Blanditiis repellendus omnis enim perspiciatis similique voluptas odio!</div>
                <div>Beatae temporibus, ab repellendus molestiae nihil cupiditate dolorum corporis labore accusamus soluta nesciunt sequi, neque quo quos sapiente odit autem provident laborum maxime quaerat? Officia magni harum quis ullam perspiciatis.</div>
                <div>Neque voluptate doloremque at amet quod assumenda velit ex laudantium, numquam nesciunt earum consequatur natus repudiandae omnis? Error debitis quasi velit beatae eaque hic dolores ipsam, illum saepe modi iusto?</div>
                <div>Dolor veritatis obcaecati ut, doloribus cumque quidem repellendus. Dolor non deserunt est, fugit eligendi natus tenetur? Animi perferendis maiores earum porro quaerat velit ipsa beatae necessitatibus. Eligendi eos veritatis inventore!</div>
                <div>Hic quaerat nam delectus illo ut officiis officia accusantium, soluta nulla obcaecati fugit voluptatum. Natus quae temporibus ad ullam dicta itaque dolorem repellendus pariatur, unde nobis aliquam delectus ex maxime.</div>
                <div>Quod itaque, laborum tempora id tempore ducimus sint nobis fugiat? Adipisci magnam molestias ea commodi temporibus sequi ratione itaque quos, asperiores quae deserunt iure doloribus atque fugit tenetur, vitae reiciendis?</div>
                <div>Tenetur necessitatibus sint architecto libero adipisci earum, soluta doloribus reiciendis reprehenderit tempora laboriosam beatae saepe itaque nihil sit commodi ducimus autem, aperiam dicta in velit voluptatem incidunt deleniti delectus. Error.</div>
                <div>Vitae, nisi officia esse dolor harum odio voluptatem pariatur iusto tenetur accusantium eveniet totam sapiente dolorum laborum! Animi natus ratione molestiae harum cumque, perspiciatis, sapiente laudantium, delectus officia repellendus nobis.</div>
                <div>Quas expedita modi voluptate quasi perspiciatis aut? Cupiditate corporis a, atque labore dolorem neque quis eligendi libero vitae quasi, asperiores velit reprehenderit facilis laudantium. Aspernatur facere dolorem ex soluta rem.</div>
                <div>Labore cupiditate sed quia omnis suscipit magnam distinctio eveniet deserunt expedita accusantium ut eius odit quibusdam dicta in, officiis dolore laboriosam modi dolorum? Esse consectetur at nulla placeat labore nesciunt?</div>
                <div>Architecto, laboriosam nihil corrupti officiis perferendis quia possimus, alias autem mollitia laborum ea nemo beatae odit ex molestiae officia explicabo corporis dolorum nisi. Facilis dolores repudiandae illum autem magnam rem!</div>
                <div>Recusandae repellat velit esse magnam dignissimos. Hic, quisquam. Sapiente necessitatibus possimus consequatur dolorum cumque illum dolores ea laborum! Aut vel beatae, cum sequi officia nostrum quas cumque accusantium quaerat vero.</div>
                <div>Ex, eius! Repellat temporibus, itaque dicta quae fugiat odio perspiciatis harum, delectus soluta officia mollitia cumque quisquam doloribus rerum quasi a quos alias nihil earum corrupti officiis quaerat unde! Vitae!</div>
                <div>Cumque consequatur accusantium, minima reiciendis praesentium numquam dolorum placeat fugit delectus nesciunt. Tenetur cupiditate assumenda ullam aliquam excepturi sequi voluptas, officia sed laboriosam odio placeat, debitis a eaque molestias est.</div>
                <div>Sed dolore quisquam repellat blanditiis cupiditate natus quas facere, consequatur nobis doloremque. Minima molestias suscipit labore repellendus laborum, quibusdam atque nobis officiis non veniam neque ipsa eligendi est blanditiis possimus?</div>
                <div>Sint, corrupti laborum cumque ea labore perferendis officiis rerum animi repellat facilis, maiores explicabo suscipit consectetur eius? Odit, eos, ducimus cupiditate nam nisi eius, repellat ab magni repellendus officia aut.</div>
                <div>Quis, quidem quaerat ducimus minus molestiae perspiciatis ullam? Totam in neque cumque at fuga ipsum architecto dolore, molestias minus porro beatae, quasi sit error consequatur deleniti harum odit, unde laboriosam?</div>
                <div>Sint repellat provident mollitia corporis, in optio recusandae molestias esse ipsa pariatur nam aspernatur architecto eaque rerum consequatur magni sunt porro, aliquid non odit fugiat? Beatae voluptatibus molestias laudantium animi?</div>
                <div>Laborum, aliquam dolore at, dolorem optio alias perferendis odit fugit illo maiores soluta doloremque distinctio, laudantium voluptas iusto possimus amet ut architecto reiciendis blanditiis enim rem corrupti. Omnis, repellat voluptates.</div>
                <div>Ex qui voluptatibus, necessitatibus quibusdam accusamus eos similique accusantium consequatur mollitia, harum beatae. Temporibus velit soluta culpa facilis omnis, voluptatem corporis nesciunt quod minima esse eos, rerum officia, qui libero.</div>
                <div>Accusamus facilis distinctio libero soluta pariatur ipsum. Voluptas in nulla impedit ducimus perferendis reprehenderit mollitia id repellat eaque, veniam provident? Nihil consequuntur quod doloribus accusantium odio non, doloremque esse. Distinctio.</div>
                <div>Non, fugiat! Commodi ex hic asperiores sapiente iusto, dicta magni eum voluptatibus suscipit blanditiis, deleniti incidunt praesentium aut dolorum architecto sint maiores at dignissimos enim voluptatem. Eligendi esse officiis quibusdam?</div>
                <div>Aperiam quas sapiente molestias vero nostrum eveniet atque expedita. Similique cum dicta laudantium itaque suscipit impedit perferendis qui architecto culpa optio quam repellat praesentium saepe, repudiandae sit consequatur eligendi. Accusantium?</div>
                <div>Officiis repellat quisquam corrupti nulla animi officia delectus deleniti eos enim recusandae unde est ipsam ad eum quaerat architecto ullam dolores, aliquam nesciunt esse veniam sunt voluptates, quibusdam soluta? Dolorem.</div>
                <div>Placeat, ab earum harum, repellendus accusamus accusantium commodi aut autem eius cupiditate quos tempore! Commodi, adipisci magni fuga odio illo sapiente reprehenderit optio quo minima nam nostrum blanditiis natus dolor.</div>
                <div>Earum aliquam vel impedit excepturi aliquid explicabo ipsam magnam porro at sequi ipsum qui illo tempora nihil itaque incidunt sunt in dolor, soluta culpa nulla ab? Earum fugiat beatae obcaecati!</div>
                <div>Molestias animi vel asperiores, quod ea vero? Officiis quisquam quo aliquam maiores nam veritatis repellat eum quidem dolor nesciunt magni dicta necessitatibus ea cupiditate itaque ipsa, consequuntur pariatur magnam vitae.</div>
                <div>Vitae quasi, facilis ab consequatur dolorum id perferendis neque quos ullam, est numquam harum mollitia officiis corporis, molestias natus. Dolor expedita quod magni accusantium quasi in doloremque delectus recusandae voluptates?</div>
                <div>Ducimus quae dignissimos harum blanditiis dolore possimus, soluta ab! Tenetur recusandae sed sint quisquam amet, dolorum quos delectus. Placeat deserunt illo fugit. Nostrum sunt ex odit modi eaque aperiam ducimus.</div>
                <div>Expedita, officiis! Dignissimos nesciunt ratione modi, libero id quaerat autem deleniti laborum voluptatum debitis tempore voluptate vitae ipsam totam quae ullam blanditiis. Veniam molestiae ipsa dolore! Fugit dicta sit assumenda!</div>
                <div>Inventore ea aperiam totam similique repellat qui ab ullam quasi voluptas, ad iure, error sequi. Voluptatem id exercitationem ut autem reiciendis totam dolores alias perspiciatis facilis! Illum cum ut voluptatum?</div>
                <div>Laborum sint optio corporis illo hic repudiandae temporibus! Maxime eum doloribus ad, sunt dolorem optio sit. Mollitia doloremque quo illo ipsam est, impedit dolorum quia! Porro magni odio voluptatem culpa.</div>
                <div>Inventore quis optio totam illo similique architecto facilis nemo magnam! Molestiae asperiores obcaecati beatae consectetur consequatur ad deserunt, saepe modi a delectus reiciendis commodi quisquam dignissimos odio nostrum quae esse.</div>
                <div>Omnis fuga eveniet nobis totam id! Delectus provident quam voluptatum totam fugiat esse, quasi impedit dolores labore! Commodi repudiandae repellendus obcaecati. Eveniet nam provident dicta temporibus eligendi odio animi vitae.</div>
                <div>Labore alias totam itaque. Commodi aspernatur eos laboriosam repellat deserunt est necessitatibus minima harum id debitis, officia sit impedit suscipit, assumenda officiis culpa, ipsum pariatur. Totam explicabo doloribus nisi fugiat?</div>
                <div>Corporis deleniti placeat nobis alias, quae obcaecati dolorum expedita in, at est pariatur exercitationem eaque similique aspernatur, tenetur quo iure voluptas iusto quasi voluptatum. Autem ad assumenda voluptates quisquam similique?</div>
                <div>Quisquam perferendis fuga, quidem error fugiat dolor quia vero soluta, accusamus, mollitia nobis minima fugit. Amet perspiciatis sit impedit. Alias aliquam odio libero quaerat, asperiores incidunt officia unde nihil eos.</div>
                <div>Quibusdam praesentium amet reiciendis numquam deleniti atque quos perspiciatis! Labore nihil repellendus optio eligendi totam officiis porro sint iusto beatae, laboriosam nemo maxime, architecto hic facilis molestiae numquam dicta sunt.</div>
                <div>Nobis rem enim error rerum numquam veritatis adipisci? Eligendi error voluptatibus at architecto rerum, illum vel adipisci odit debitis libero ex praesentium sequi voluptatem, saepe autem natus! Fuga, sed reiciendis.</div>
                <div>Harum enim fugiat minus ea. Id molestiae possimus deserunt ullam debitis. Ratione culpa enim debitis natus quo, illo nam? Provident iste nam cumque dolores earum accusamus cupiditate quisquam dignissimos est!</div>
                <div>Enim est incidunt ipsa iste nulla numquam error cupiditate quasi modi sed ipsum quod dignissimos praesentium, adipisci sint dolorem nobis magnam pariatur ducimus ea itaque libero inventore dolores autem. Adipisci?</div>
                <div>Distinctio commodi aspernatur illum autem saepe nulla expedita, modi ipsum. Eos ab eveniet odit tempore, nam ratione animi est ipsa omnis magnam saepe voluptatum, eum delectus dicta, minima maxime natus?</div>
                <div>Obcaecati iste accusantium, accusamus dolores neque velit saepe itaque libero eius magnam sunt quisquam temporibus! Rerum aliquid perspiciatis voluptate sapiente exercitationem asperiores! Optio doloribus eligendi temporibus esse. Reiciendis, aperiam sed.</div>
                <div>Cum dignissimos est in, quam quo deleniti iure architecto qui totam repudiandae voluptate exercitationem placeat, aliquid nemo accusantium fugiat! Eos illo nam accusantium quaerat, iusto accusamus et exercitationem molestias itaque?</div>
                <div>Corrupti ipsa, aliquid eaque deserunt nam omnis doloremque mollitia nobis totam officiis culpa odit esse maxime repudiandae, error laudantium dolor corporis minima incidunt voluptas amet aperiam? Eveniet doloribus minima reiciendis!</div>
                <div>Iure repellendus molestiae voluptates fugit suscipit nulla, dolorem quae officiis quibusdam aliquid rem! Beatae harum tenetur modi quia veritatis nesciunt laudantium explicabo! Officiis atque veritatis natus neque commodi quis qui!</div>
                <div>Quos fuga cupiditate quasi nobis tempora unde, exercitationem fugiat ullam. Est corporis praesentium a. Consequatur officia unde, veritatis quibusdam nemo enim velit cum eius iusto, mollitia quam repellendus recusandae magni?</div>
                <div>Mollitia atque, optio aut at, similique, sapiente nostrum officia fugiat tempora rem tenetur doloribus eligendi porro sunt distinctio blanditiis aliquid dignissimos? Accusantium minima culpa, ut voluptatum soluta eligendi nesciunt accusamus.</div>
                <div>Officiis, mollitia neque ad modi, veritatis commodi quis possimus perferendis exercitationem ratione, provident voluptas fugiat fuga explicabo consequatur similique doloribus dicta nostrum esse adipisci. Molestias, earum accusamus? Voluptatibus, quia reprehenderit?</div>
                <div>Facere id eaque hic. Illum in itaque impedit fugiat deleniti exercitationem molestias laborum tempore numquam vitae, sunt et hic assumenda modi qui doloribus atque cupiditate eum sed porro dolorum quis.</div>
                <div>Qui reprehenderit veniam enim veritatis fugit perferendis molestias error laudantium, reiciendis laboriosam, tempore assumenda, nulla sequi minima. Iure et fugit, earum dolores ipsam harum perferendis quibusdam eligendi iusto ab doloremque.</div>
                <div>Pariatur, dolore ullam deleniti ipsa ex minima facilis exercitationem eligendi. Reiciendis cupiditate quos officiis repellat ad expedita maxime ipsam, dolor quibusdam vel labore deserunt tempora. Vitae similique quasi accusantium repellat?</div>
                <div>Amet itaque eum voluptatibus laboriosam, voluptate odio, fugit ad culpa, consequatur quibusdam a expedita ducimus corporis repellendus illum perferendis quaerat dolorem repudiandae deleniti enim veritatis ipsa possimus et. Soluta, voluptatibus.</div>
                <div>Veritatis et, aperiam dolore officiis ratione eius eligendi. Totam dicta rerum dolor obcaecati corrupti doloremque odit nobis veniam ex animi! At nemo amet a repellat qui id distinctio libero officiis?</div>
                <div>Deserunt at excepturi cupiditate illum iusto, tempora libero hic explicabo voluptate, eius harum exercitationem, veritatis sint culpa. Unde illum non perspiciatis voluptates hic facilis distinctio aut amet, tenetur quod quidem!</div>
                <div>Iusto repellendus temporibus vero fuga cum voluptatum nam eum aliquid porro dolorem? Cumque ipsa officiis hic eum unde corrupti neque ullam aut debitis, quos illo, quidem alias pariatur id velit!</div>
                <div>Architecto quidem, voluptate atque doloribus et necessitatibus quas ex aliquid maxime nemo molestias non ea, ab mollitia magnam natus! Quaerat laboriosam nesciunt libero sed sequi, in neque quod quas reiciendis!</div>
                <div>Alias ipsum blanditiis necessitatibus consectetur inventore quisquam labore delectus? Dignissimos numquam eius dolor accusantium consequatur omnis voluptate, rem perferendis laudantium, exercitationem quam suscipit facere! Suscipit quae expedita numquam eligendi vitae.</div>
                <div>Voluptas tempore fuga iste nostrum, excepturi facilis ab unde corrupti magnam aspernatur distinctio perspiciatis nam hic enim et aperiam commodi quaerat ut magni alias ad cumque doloribus sapiente? Dolorem, aperiam!</div>
                <div>Laudantium aperiam id dignissimos ipsam tenetur exercitationem eligendi corporis sequi, delectus inventore nesciunt amet neque sint vel officia illo corrupti pariatur dolor, aliquam ratione deleniti? Vero necessitatibus aut nobis quo.</div>
                <div>Natus voluptatem harum doloremque fugit omnis pariatur, ratione illum. Atque, doloribus dolorum. Sit eum perspiciatis atque. Labore alias praesentium repudiandae a! Voluptatibus corrupti dolor atque maxime molestiae ipsum, laborum amet.</div>
                <div>Fuga rem ipsa voluptatibus placeat eaque tenetur quos sapiente amet id? Ut alias et perferendis officiis, voluptate voluptatibus! Pariatur unde reiciendis nobis quaerat aspernatur delectus magnam quasi minima cum consectetur?</div>
                <div>Nostrum doloribus in qui atque culpa dolores quasi, enim earum rerum maxime nisi suscipit expedita nobis facilis, ratione sapiente saepe sed iste quidem adipisci excepturi optio ipsa numquam! Expedita, dignissimos!</div>
                <div>Architecto sapiente explicabo temporibus est earum officia voluptate eos! Excepturi provident dicta fugit totam ut atque molestias omnis aliquid eos soluta tempora debitis quia expedita, nobis suscipit assumenda aspernatur facere.</div>
                <div>Tenetur, explicabo. Cumque, minima molestiae praesentium ab quos officia at culpa vitae autem necessitatibus officiis quaerat rem velit asperiores soluta reprehenderit corrupti, adipisci, ut libero aliquid impedit quam. Nobis, error.</div>
                <div>Pariatur repudiandae inventore officiis magnam sapiente? Iure recusandae possimus beatae voluptate quaerat numquam nostrum. Molestiae, veritatis. Odit facilis, minima repellat inventore illum nam. Optio cupiditate ab, corporis magnam iste ad.</div>
                <div>Doloribus mollitia cumque praesentium impedit repellendus minus recusandae voluptatibus neque in, dignissimos sapiente repellat accusantium debitis ex adipisci excepturi, et provident nemo maxime aperiam architecto rerum maiores modi? Labore, eveniet?</div>
                <div>Ipsa, rem maxime unde ex placeat harum eius eaque temporibus minima sit tempore id consectetur voluptates dolores! Blanditiis, porro perferendis, distinctio, animi doloremque culpa placeat ipsum deserunt aperiam totam vero?</div>
                <div>Quibusdam pariatur sit molestias ex quis quia quod totam sed impedit nesciunt, amet id illum suscipit voluptatem modi nisi incidunt accusamus doloribus quos tenetur hic unde perferendis? Consequuntur, inventore hic?</div>
                <div>Asperiores libero obcaecati ad unde soluta voluptates exercitationem, saepe repellendus aut porro architecto voluptatem nisi eveniet reiciendis recusandae eum, nemo ullam nam provident deleniti eaque debitis. Voluptatibus hic accusamus debitis?</div>
                <div>Illum asperiores veniam assumenda quisquam nihil adipisci corporis magni exercitationem voluptatum numquam fugiat officiis sapiente sed, quia earum possimus officia nobis laborum facere. Odit unde, magni iusto est nulla nostrum.</div>
                <div>Fuga iure dolorum praesentium necessitatibus ea nemo eligendi doloribus deserunt rem maxime quasi sint aspernatur modi odio veniam tenetur in dolorem eaque, quam quidem commodi minima esse? Magni, consectetur eaque!</div>
                <div>Cumque, tempore ratione illum impedit non modi cupiditate. Natus, a. In fuga ab deserunt eaque officia delectus deleniti voluptas? A dolor maiores sapiente architecto, id molestiae reiciendis corporis in? Beatae.</div>
                <div>A veniam autem harum natus nobis dolorum, ipsum corporis non ex doloremque provident beatae, labore dolores molestias quisquam vero necessitatibus quae quos doloribus. Earum voluptates magni, repudiandae illum recusandae deleniti!</div>
                <div>Adipisci ipsum nostrum labore veritatis maxime quibusdam consequuntur, id facilis, odit perspiciatis ipsa. Dolor aspernatur pariatur voluptas, cumque blanditiis dolore eos aliquid hic eveniet cupiditate exercitationem ut est ratione ipsam!</div>
                <div>Laborum, saepe magnam voluptas fuga, omnis expedita quae nisi, corrupti dolore temporibus tempora veniam laudantium. Facere magni praesentium sequi dolorem vel obcaecati, sit tempora vero placeat repudiandae adipisci modi voluptate?</div>
                <div>Est aperiam libero odio excepturi fugit consequuntur, molestiae exercitationem maxime cupiditate soluta provident vel nihil ipsum aliquid praesentium error alias aliquam tenetur fuga, officia debitis repellat! Odit ad corporis quam.</div>
                <div>Itaque dolores odit dicta reiciendis aliquid eveniet sed corrupti. Sed expedita provident delectus. Nemo reprehenderit suscipit eius ad id nihil tempora et, tenetur incidunt quos veniam voluptate, eligendi quis vitae.</div>
                <div>Rem expedita assumenda vero labore. Doloribus est beatae incidunt odit? Ex deserunt sequi molestiae voluptatibus accusamus quos quia a quae autem harum. Quaerat quod dolore tempore quam cumque voluptates amet?</div>
                <div>Ducimus consequuntur magnam error quibusdam laboriosam. Iusto, necessitatibus quo voluptas quam corrupti possimus non blanditiis obcaecati natus perferendis veritatis quaerat modi nihil perspiciatis, cum aperiam nisi temporibus id minima nobis?</div>
                <div>Illum, tempora consequuntur neque commodi quod recusandae dicta, obcaecati ipsam, explicabo asperiores officia illo excepturi inventore similique dolor possimus repellat dolores reiciendis? Accusantium, suscipit! Enim sequi minus error voluptatum tempore.</div>
                <div>Dolore amet natus consequuntur deleniti aliquid, autem pariatur labore hic reprehenderit tenetur? Laudantium expedita nisi enim? Atque, sint tempora, accusantium perferendis optio assumenda, corrupti amet dolorem illo et praesentium explicabo?</div>
                <div>Amet molestiae dolores adipisci, totam, accusamus quae explicabo earum praesentium vel minus quaerat quisquam veniam quidem nulla voluptatibus sequi necessitatibus eveniet quis molestias sed harum odio. Numquam iste animi iusto.</div>
                <div>Ipsum dolore commodi excepturi, magnam, deleniti molestias, alias iusto neque illo consequuntur quo nemo cupiditate ea repudiandae quisquam illum possimus minus a dignissimos. Vero praesentium amet quo obcaecati ipsa deserunt.</div>
                <div>Numquam illo vero labore modi, voluptate magnam autem! Ipsa provident earum praesentium minima quos aliquid laudantium repellendus dignissimos ab modi quae, nemo sunt deserunt? Earum iste dolores eaque. Vero, animi.</div>
                <div>Minus deleniti rem temporibus quas voluptas dicta, obcaecati ad autem assumenda at amet omnis veniam rerum totam, dolore adipisci? Nulla modi quod tempora sint? Illo veniam maxime harum? Corrupti, fuga?</div>
                <div>Facere, quidem. Sapiente quam atque ratione, dolore dolorum iste cupiditate officiis iure nostrum, velit voluptatem blanditiis ut unde aliquid sunt? Quae optio eius, delectus est fugit ut rerum nulla numquam.</div>
                <div>Eos eius non molestias iure, amet quaerat temporibus sint numquam a sunt voluptate magnam quasi quo nisi sed? Fugiat velit exercitationem esse numquam laborum dolore voluptatum quae aperiam blanditiis labore.</div>
                <div>Illum hic, est, assumenda esse officia debitis tempore iusto nemo animi accusantium dolorem libero, voluptates a soluta. Adipisci molestias, temporibus molestiae, quo pariatur dolorum unde suscipit nihil iste, earum maiores.</div>
            </main>
            <footer>footer</footer>
            </article>
            <noscript>Your browser does not support JavaScript!</noscript>
            `
    }

    // ------------------------------------------------------------------------------------------------------------------------------------------
    // Observers
    // ------------------------------------------------------------------------------------------------------------------------------------------
    static get observers() {
        return [
            'stateUpdate(state.*)'
        ]
    }


    // ------------------------------------------------------------------------------------------------------------------------------------------
    // Properties
    // ------------------------------------------------------------------------------------------------------------------------------------------
    static get properties() {
        return {
            state: {
                type: Object,
                value: {}
            }
        }
    }


    // ------------------------------------------------------------------------------------------------------------------------------------------
    // Methods
    // ------------------------------------------------------------------------------------------------------------------------------------------
    stateUpdate(update) {
        console.group("%c[STATE]", 'color: #16a085', new Date().toLocaleTimeString())
        console.log("%c[STATE Current]", 'color: #16a085', this.state)
        console.log("%c[STATE Update]", 'color: #16a085', update)
        console.groupEnd()
    }
}


// ------------------------------------------------------------------------------------------------------------------------------------------
// Define
// ------------------------------------------------------------------------------------------------------------------------------------------
window.customElements.define('webrew-website', WebrewWebsite)