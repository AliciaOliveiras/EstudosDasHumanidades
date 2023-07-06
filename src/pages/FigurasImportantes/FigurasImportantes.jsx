import { useNavigate } from "react-router";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Box,
  CardActionArea,
} from "@mui/material";

export default function FigurasImportantes() {
  const navigate = useNavigate();

  function handleBackButton() {
    navigate("/");
  }

  return (
    <>
      <button
        onClick={handleBackButton}
        style={{
          position: "absolute",
          backgroundColor: "#e23d8c",
          color: "white",
          padding: "0.5rem",
          borderRadius: "2rem",
          width: "8rem",
          margin: "1rem",
          right: 0,
          border: "none",
          top: "7rem",
        }}
      >
        Voltar
      </button>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#078272",
        }}
      > */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} lg={4}>
              <Card style={{ margin: "1rem", height: 500 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://pdt.org.br/wp-content/uploads/2021/09/M%C3%A1rio-Juruna-na-C%C3%A2mara-dos-Deputados.jpg"
                  alt="Mário Juruna"
                />
                <CardContent>
                  <h3
                    style={{
                      color: "#00695c",
                      fontSize: "30px",
                      marginBottom: "1rem",
                    }}
                  >
                    Mário Juruna
                  </h3>
                  <h6 style={{ color: "gray" }}>
                    Foi um líder indígena e político brasileiro. Filiado ao
                    Partido Democrático Trabalhista, foi o primeiro deputado
                    federal indígena do Brasil.
                  </h6>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ margin: "1rem", height: 500 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://i0.wp.com/aamazonia.com.br/wp-content/uploads/2022/12/whatsapp-image-2022-12-29-at-103951.jpeg?fit=984%2C953&ssl=1"
                  alt="Sonia Guajajara"
                />
                <CardContent>
                  <h3
                    style={{
                      color: "#00695c",
                      fontSize: "30px",
                      marginBottom: "1rem",
                    }}
                  >
                    Sonia Guajajara
                  </h3>
                  <h6 style={{ color: "gray" }}>
                    Líder, ativista, deputada federal eleita em 2022, atualmente
                    Ministra dos Direitos Humanos no Gov. Lula.
                  </h6>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ margin: "1rem", height: 500 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://s2.glbimg.com/qJqcg6ZHW8dhRePMoiJmac-DmvE=/0x0:5184x3456/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/2/0/qOjPgGSVSJqzrFvYELyQ/3.glbimg.com-v1-auth-0ae9f161c1ff459593599b7ffa1a1292-images-escenic-2022-4-23-18-1650749531363.jpg"
                  alt="Davi Kopenawa"
                />
                <CardContent>
                  <h3
                    style={{
                      color: "#00695c",
                      fontSize: "30px",
                      marginBottom: "1rem",
                    }}
                  >
                    Davi Kopenawa
                  </h3>
                  <h6 style={{ color: "gray" }}>
                    É xamã e líder político do povo Yanomami, presidente da
                    Hutukara Associação Yanomami, ativista na defesa dos povos
                    indígenas e da floresta amazônica, além de autor,
                    roteirista, produtor cultural e palestrante.
                  </h6>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ margin: "1rem", height: 500 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://www.gov.br/funai/pt-br/assuntos/noticias/2023/primeira-indigena-a-presidir-a-funai-joenia-wapichana-toma-posse-em-cerimonia-historica-prestigiada-por-liderancas-autoridades-e-sociedade-civil/vac_abr0302231858.jpg/@@images/6545fa73-cb95-441f-a4ea-069251cc5bbf.jpeg"
                  alt="Joênia Wapixana"
                />
                <CardContent>
                  <h3
                    style={{
                      color: "#00695c",
                      fontSize: "30px",
                      marginBottom: "1rem",
                    }}
                  >
                    Joênia Wapixana
                  </h3>
                  <h6 style={{ color: "gray" }}>
                    Primeira mulher indígena a exercer a advocacia no país,
                    ex-Deputada Federal pelo Estado de Roraima, atual presidente
                    da FUNAI.
                  </h6>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ margin: "1rem", height: 500 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://i.em.com.br/l38oLGx7-rLnpdK07lum81WqrCw=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/07/24/1289507/20210723200545199721a.jpg"
                  alt="Daniel Munduruku"
                />
                <CardContent>
                  <h3
                    style={{
                      color: "#00695c",
                      fontSize: "30px",
                      marginBottom: "1rem",
                    }}
                  >
                    Daniel Munduruku
                  </h3>
                  <h6 style={{ color: "gray" }}>
                    Além de escritor, com mais de 54 livros publicados em todo
                    mundo, também é Doutor em Educação e Pós-doutor em
                    Linguística. Ele já recebeu diversos prêmios nacionais e
                    internacionais, dentre eles o prêmio Jabuti.
                  </h6>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ margin: "1rem", height: 500 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://ichef.bbci.co.uk/news/640/cpsprodpb/0E7F/production/_109211730_hi056313582.jpg"
                  alt="Cacique Raoni Metuktire"
                />
                <CardContent>
                  <h3
                    style={{
                      color: "#00695c",
                      fontSize: "30px",
                      marginBottom: "1rem",
                    }}
                  >
                    Cacique Raoni Metuktire
                  </h3>
                  <h6 style={{ color: "gray" }}>
                    O cacique, nascido no Mato Grosso, é respeitado por defender
                    a Amazônia e os povos indígenas da floresta. Em 2020, foi
                    indicado ao Prêmio Nobel da Paz..
                  </h6>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
{/*       </div> */}
    </>
  );
}
