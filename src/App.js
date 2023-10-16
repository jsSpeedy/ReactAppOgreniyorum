//import logo from './logo.svg';
import './App.css';
import CardComponent from './components/Card';
import { useState } from 'react';
import { Button, Checkbox, Input, Textarea, Container, Stack, Grid } from '@mantine/core';

// const guncelle = (lesson) => {
//   return lesson + 1;
// }

const App = () => {
  const [list, setList] = useState([
    {
      title: "dağ 1",
      par: "açıklama 1"
    },
    {
      title: "dağ 2",
      par: "açıklama 2"
    },
    {
      title: "dağ 3",
      par: "açıklama 3"
    }
  ]);
  const [title, setTitle] = useState("");
  const [paragraf, setParagraf] = useState("");
  const [lesson, setLesson] = useState(11);
  const click = () => {
    setTitle("");
    setParagraf("");
    setList([ 
    ...list,
    {
      title,
      par: paragraf
    }
  ]);
  }
  return (
    <Container >
      <h1>Kart Oluşturma Programı</h1>
      <Stack>
        <Input.Wrapper label="Başlık">
          <Input
            placeholder="Başlık Yazınız"
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </Input.Wrapper>

        <Textarea
          label="Paragraf"
          placeholder="Paragraf Yazınız"
          value={paragraf}
          onChange={(e) => setParagraf(e.target.value)} />

        <Button color='red' variant='outline' mt={10} onClick={click}>Kart Oluştur</Button>
      </Stack>

      <Checkbox my={10} defaultChecked label="I agree to sell my privacy" color="grape" radius="xl" />
      <Button onClick={() => { setLesson(lesson + 1) }}>Ders arttır</Button>
      <Button mx={10} onClick={() => { setLesson(lesson - 1) }}>Ders azalt</Button>
      <Button onClick={() => { setLesson(100) }}>Ders 100</Button>

      <h2>Kartlar:</h2>
      <Grid>
        {
          list.map(({ title, par }, index) => {
            return (
              <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={`index ${index}`}>
                <CardComponent 
                title={title} 
                par={par} 
                lesson={lesson} 
                i={index} 
                click={() =>
                  {
                    const copyList = [...list];
                    copyList.splice(index,1);//kartı silme işlemini gerçekleştirdik.
                    setList(copyList);
                  }
                }
                />
              </Grid.Col>
            )
          })
        }

      </Grid>

    </Container>
  );
}

export default App;
