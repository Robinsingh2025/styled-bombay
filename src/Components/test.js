class RecipePage extends React.Component {
  
    render() {
      const { item } = this.props.data;
      return (
    }
  }
  
  

const { item } = this.props.data;
    return (
      <main>
        <h1>{item.title}</h1>
        <div className='banner'>
          <img src={item.image} alt={item.title} />
        </div>
        <h2>Steps</h2>
        <ol>
          {item.steps.map((step, index) => (
            <li>
              <a href={`#step${index + 1}`}>{step.name}</a>
            </li>
          ))}
        </ol>
        {item.steps.map((step, index) => (
          <Step step={step} index={index} />
        ))}
      </main>