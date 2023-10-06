import classes from './App.module.css'
import UseExampleDefault from "./examples/UseExampleDefault";
import UseExampleWithCross from './examples/UseExampleWithCross';
import UseExampleWithForm from './examples/UseExampleWithForm';

function App() {


  return (
    <div className={classes.app}>
      <UseExampleDefault />
      <UseExampleWithCross/>
      <UseExampleWithForm/>
    </div>
  )
}

export default App
