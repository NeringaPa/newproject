import Directory from './components/directory/directory.component';

const App = () => {

  const categories = [
    {
      id: 1,
      title: "Honey",
      imageUrl: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 2,
      title: "Royal Yelly",
      imageUrl: 'https://www.insidescience.org/sites/default/files/2020-07/queen-bee-cup_cropped.jpg'
    },
    {
      id: 3,
      title: "Beeswax",
      imageUrl: 'https://images.unsplash.com/photo-1627515761181-9d20a39536bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      id: 4,
      title: "Bee bread",
      imageUrl: 'https://cdn.ecommercedns.uk/files/6/227216/1/12317411/beebread-product.jpg'
    },
    {
      id: 5,
      title: "Propolis",
      imageUrl: 'https://www.tevu-darzelis.lt/Files/image/nestumas/article/kas-yra-propolis-ir-kodel-jis-toks-naudingas-inner_propolis-medus.jpg'
    }
  ];

  return < Directory categories={categories} />;
};
  
export default App;