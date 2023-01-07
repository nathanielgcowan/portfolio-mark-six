import ForApp from './routes/ForApp';
import NavLinkBars from './linkbars/NavLinkBars';

function App() {

  return (
    <>  
      <NavLinkBars />
      <ForApp />
    </>
  );
}

export default App;


        // <Routes>
          // <Route path='/' element={< Home />} />
          // <Route path='/books/*' element={<BookRoutes />} />
          // <Route path='*' element={<NotFound/>} />
        // </Routes>


  // let element = useRoutes([
  //   {
  //     path: '/',
  //     element: <Home />
  //   },{
  //     path: '/books/*',
  //     element: <BookRoutes />
  //   },{
  //     path: '*',
  //     element: <NotFound />
  //   }
  // ])
