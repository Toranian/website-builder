const defaultImage = "https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80";
const defaultHeader = "Default Header";
const defaultDescription = "This is the default text for the description of the card.";


export default function Card(props) {
	return (
		<div className="card">
			<div className="card-container">
				<img className="card-img" src={props.img || defaultImage} alt={props.alt || "No alternate text provided."} />
				<div className="text-large primary-text font-bold">{props.cardHeader || defaultHeader}</div>
				<div className="text-medium secondary-text">{props.description || defaultDescription}</div>
				<div className="secondary-button">{props.buttonText || "View"}</div>
			</div>
		</div>
	);
}