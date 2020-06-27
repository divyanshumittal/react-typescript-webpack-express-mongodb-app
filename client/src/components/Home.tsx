import * as React from "react";
import api from "../api";
import NewTodo from './TodoList';

interface Block {
    id: number;
    name: string;
}
interface HomeProps { compiler: string; framework: string; }
interface HomeState { blocks: Array<Block>; }

// 'HomeProps' describes the shape of props.
export default class Home extends React.Component<HomeProps, HomeState> {
    state = { blocks: []};
    componentDidMount() {
        api.getAllBlocks().then(blocks => this.setState({blocks}));
    }
    render() {
        const { blocks } = this.state;
        const { compiler, framework } = this.props;
        return (
            <>
                <h1>Hello from {compiler} and {framework}!</h1>
                <h3 className="heading">Blocks list:</h3>
                {blocks.map((block:Block) => (
                    <div key={block.id}>
                        <div>Block Id: {block.id}</div>
                        <div>Block Name: {block.name}</div>
                    </div>
                ))}
                <NewTodo />
            </>
        );
    }
}