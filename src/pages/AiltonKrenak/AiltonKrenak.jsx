import ailtonKrenak from "../../core/assets/images/humanidades/ailtonKrenak.png";
import { useNavigate } from "react-router";

export default function AiltonKrenak() {

    const navigate = useNavigate(); 

    function handleBackButton(){
        navigate('/')
      }

  return (
    <>
    <button onClick={handleBackButton} style={{position: 'absolute', backgroundColor: '#e23d8c', color: 'white', padding: '0.5rem', borderRadius: '2rem', width: '8rem', margin: '1rem', right: 0, border: 'none', top: '7rem'}}>
        Voltar
    </button>
      <img style={{ width: "100%" }} src={ailtonKrenak} alt="" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ padding: "1rem", marginTop: "1rem", color: '#00695c'}}>
          Quem é Ailton Krenak?
        </h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', padding: '1.5rem', textAlign: 'justify'}}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit in
          quidem quos perspiciatis, quod temporibus doloribus illum inventore
          harum! Fuga labore animi vitae atque, reiciendis minima voluptatum
          tempora in. Dolor unde perspiciatis eum qui hic distinctio dolorem vel
          laboriosam, inventore aliquam beatae quisquam temporibus in, et est
          harum consequatur dolores, fugit labore. Eius aspernatur molestias
          laboriosam nisi laudantium voluptatum. Quia consectetur eius ut
          perferendis sint vel voluptatibus itaque accusantium minus? Quisquam
          veritatis pariatur dolores veniam, soluta labore quis provident
          voluptatum. Iusto cum pariatur ab minus architecto beatae, labore
          voluptate. Eos non magni commodi labore alias ipsum voluptatum iure at
          tempora accusantium expedita praesentium, nemo rerum qui iste porro
          corporis voluptas a, temporibus deserunt! Dolor maxime dignissimos id
          amet eos. Quasi earum reiciendis sapiente aliquid fugit omnis placeat
          delectus quidem suscipit, dolorum sed magni? Pariatur delectus illum
          voluptate eveniet consequuntur expedita aliquid atque consequatur
          necessitatibus maxime? Odio saepe nisi ratione! Accusantium inventore
          velit maxime praesentium iusto molestiae impedit earum qui tempore
          repudiandae corrupti ut, minima unde placeat ducimus laudantium optio.
          Fugiat accusamus similique in natus sapiente placeat omnis culpa iure.
          Earum mollitia, distinctio sint perferendis incidunt, veritatis aut
          nisi tenetur expedita blanditiis deleniti, consectetur culpa
          dignissimos labore aliquam. Nulla minima iste minus excepturi dicta ab
          est odio, fugit natus? Recusandae. Aliquam architecto dolorum autem
          nemo, accusamus numquam illo aliquid odit laudantium blanditiis
          deleniti debitis illum libero doloribus facilis nesciunt quae ratione
          officia quos eveniet. Autem soluta eius itaque atque illum! Quo,
          molestiae vel. Ullam quaerat iure cupiditate, at et aut corporis
          asperiores labore, beatae accusamus neque nisi pariatur sunt, nihil
          tempore ea debitis quidem a voluptatum fugiat porro eveniet hic!
          Veritatis repellat cupiditate, animi doloribus nulla accusantium
          maiores ipsam debitis sint quae mollitia, delectus officiis tempora
          inventore ad tempore porro numquam voluptate commodi quaerat nam
          libero eos dignissimos non. Sunt. Laboriosam, aliquid odit suscipit
          rerum praesentium voluptates libero culpa reiciendis? Nemo sit sunt a
          laboriosam dolores amet sapiente fugiat fuga, delectus mollitia,
          cupiditate et placeat eligendi similique fugit ea numquam? In odit
          obcaecati itaque temporibus quaerat, cupiditate neque harum eum
          voluptatum, molestias rem delectus quibusdam maxime sunt nemo sed
          consequuntur officia sapiente nihil inventore. Deserunt ipsam aliquid
          nihil iusto minima. Veniam debitis sed quisquam amet voluptatibus,
          consequuntur tempora nostrum et blanditiis praesentium maiores optio
          officia ab aut commodi. Minima cumque repudiandae vel necessitatibus
          obcaecati omnis dolores magni delectus temporibus ea! Optio explicabo
          voluptatem harum? Minus, veniam optio neque dignissimos culpa officia
          dolores veritatis voluptate, itaque non ipsa soluta quam voluptas
          provident quas eaque accusamus corrupti quia vitae sed. Sunt, iusto.
          Labore eligendi atque nobis accusantium modi veniam voluptas molestiae
          sed dicta totam, dolor ad commodi vero voluptates quibusdam! Odio
          reiciendis quaerat dicta nobis sint voluptatibus est voluptatum animi,
          dignissimos quos. Accusamus explicabo voluptatibus quaerat, nihil hic
          dignissimos quam fugit incidunt rerum distinctio! Dolor dolorum
          aliquam quae nemo voluptate. Veniam, non numquam. Est doloribus
          quaerat dignissimos error molestiae odio, nam corporis. Nihil nostrum
          repudiandae, nobis quisquam possimus neque laborum, sed sint
          distinctio beatae rem reprehenderit hic, veritatis porro eaque soluta
          minima similique illo dolorem ducimus magnam. Eum vel nam voluptatum
          error. Commodi reprehenderit et sapiente dolores recusandae nulla
          distinctio eaque, est animi iure nam repellat debitis ratione dicta
          explicabo tempore nisi corporis. Et dolorem ipsam similique ratione
          fugit minus voluptas mollitia? Illum aspernatur sapiente velit sit ex
          recusandae ipsam est voluptate voluptatibus tenetur unde magni dolor
          dignissimos atque maxime beatae adipisci, error totam alias!
          Provident, quam beatae! Excepturi velit quaerat porro! Numquam non
          ratione minus laudantium incidunt culpa eligendi laborum facilis in
          reprehenderit eos recusandae dolores fugit odio nemo vel error iste
          quisquam consequatur inventore rem, pariatur, laboriosam voluptate!
          Fuga, ducimus?
        </p>
      </div>
    </>
  );
}
