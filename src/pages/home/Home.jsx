import styles from "./home.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Figuras from "../../core/assets/images/figuras.png";
import CorpoProtesto from "../../core/assets/images/corpo-protesto.png";
import Corpo from "../../core/assets/images/humanidades/corpo.png";
import Ailton from "../../core/assets/images/humanidades/ailton.png";
import Ailton2 from "../../core/assets/images/humanidades/ailton2.png";
import Producoes from "../../core/assets/images/humanidades/producoes.png";
import Representantes from "../../core/assets/images/humanidades/representantes.png";
import Movimento from "../../core/assets/images/humanidades/movimento.png";
import Carrossel from "../../core/components/Carrossel/Carrossel";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
      <Carrossel/>
    </div>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 800, height: "450px", margin: "1rem", boxShadow: '5px 3px 6px 1px lightGray'}}>
            <CardMedia
              component="img"
              alt="ailton krenak"
              height="250"
              src={Ailton}
            />
            <CardContent>
              <h4
                style={{ color: "#00695c", fontStyle: "bold" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Quem é Ailton Krenak?
              </h4>
              <Typography>
                Ailton Alves Lacerda Krenak, mais conhecido como Ailton Krenak,
                é um pensador, ambientalista, filósofo, poeta e escritor
                brasileiro da etnia indígena crenaque.
              </Typography>
            </CardContent>
            <CardActions>
              <Button style={{ color: "#00695c" }} size="small">
                Saiba mais
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 800, height: "450px", margin: "1rem", boxShadow: '5px 3px 6px 1px lightGray' }}>
            <CardMedia
              component="img"
              alt="movimento indígena"
              height="250"
              src={Movimento}
            />
            <CardContent>
              <h4
                style={{ color: "#00695c", fontStyle: "bold" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Movimento Indígena
              </h4>
              <Typography>
                Conjunto de movimentos sociopolíticos destinados a estabelecer
                estratégias para reivindicar direitos e reconhecimento
                historicamente espoliados e negados pelo Estado e pela
                civilização dominante.
              </Typography>
            </CardContent>
            <CardActions>
              <Button style={{ color: "#00695c" }} size="small">
                Saiba mais
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 800, height: "450px", margin: "1rem", boxShadow: '5px 3px 6px 1px lightGray' }}>
            <CardMedia
              component="img"
              alt="ailton krenak"
              height="250"
              src={Corpo}
            />
            <CardContent>
              <h4
                style={{ color: "#078272", fontStyle: "bold" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Corpo: Ato de protesto
              </h4>
              <Typography>
                Os movimentos de pinturas e manifestações corporais como meio
                político de protesto e reivindicação e sua repercussão na
                política do Brasil.
              </Typography>
            </CardContent>
            <CardActions>
              <Button style={{ color: "#00695c" }} size="small">
                Saiba mais
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 800, height: "450px", margin: "1rem", boxShadow: '5px 3px 6px 1px lightGray' }}>
            <CardMedia
              component="img"
              alt="figuras importantes"
              height="250"
              src={Representantes}
            />
            <CardContent>
              <h4
                style={{ color: "#00695c", fontStyle: "bold" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Figuras importantes do movimento
              </h4>
              <Typography>
                Figuras importantes e essenciais que estão se destacando e/ou se
                destacaram no movimento pela luta dos povos indígenas.
              </Typography>
            </CardContent>
            <CardActions>
              <Button style={{ color: "#00695c" }} size="small">
                Saiba mais
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 800, height: "450px", margin: "1rem", boxShadow: '5px 3px 6px 1px lightGray' }}>
            <CardMedia
              component="img"
              alt="livros"
              height="250"
              src={Producoes}
            />
            <CardContent>
              <h4
                style={{ color: "#00695c", fontStyle: "bold" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Visão de Humanidade
              </h4>
              <Typography>
                Livros e produções artísticas que eternizaram a perspectiva
                trazida por Ailton Krekak, destacando nesse tópico sua visão de
                humanidade.
              </Typography>
            </CardContent>
            <CardActions>
              <Button style={{ color: "#00695c" }} size="small">
                Saiba mais
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 800, height: "450px", margin: "1rem",boxShadow: '5px 3px 6px 1px lightGray' }}>
            <CardMedia
              component="img"
              alt="ailton krenak"
              height="250"
              src={Ailton2}
            />
            <CardContent>
              <h4
                style={{ color: "#00695c", fontStyle: "bold" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                O que ficou?
              </h4>
              <Typography>
                Conclusão do conhecimento obtido através na análise
                antropológica desenvolvida por Ailton Krenak e os desdobramentos
                da sua história.
              </Typography>
            </CardContent>
            <CardActions>
              <Button style={{ color: "#00695c" }} size="small">
                Saiba mais
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
