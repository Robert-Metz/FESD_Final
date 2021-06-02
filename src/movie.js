import React from "react";
import UpdateForm from './updateForm.js';
import "bootstrap/dist/css/bootstrap.css";
import {Button} from "react-bootstrap";

export default class Movie extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            movieName: this.props.movieName,
            director: this.props.director,
            releaseYear: this.props.releaseYear,
            movieID: this.props.movieID,
            isUpdating: false
        }
    }
    
    toggleUpdate = () => {
        this.setState((prevState) => {
            console.log(prevState);
            return {isUpdating:!prevState.isUpdating}})
    }

    updateMovie = async (updatedMovie) => {
        try{
            console.log(this.state.movieID);
            await fetch(`https://crudcrud.com/api/c796f522f0a848c58597f314e8dcd759/movies/${this.state.movieID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "same-origin",
                body: JSON.stringify(updatedMovie)
            });
            await this.props.getMovies();
            
            
            
        }catch(error){
            console.log("ERROR UPDATE MOVIE", error);
        }
    }

    deleteMovie = async () => {
        try{
            console.log(this.state.movieID);
            await fetch(`https://crudcrud.com/api/c796f522f0a848c58597f314e8dcd759/movies/${this.state.movieID}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "same-origin",
            });
            await this.props.getMovies();            
        }catch(error){
            console.log("ERROR UPDATE MOVIE", error);
        }
    }

    render() {
        return(
            <>
                <br/>
                <div className="border border-primary">
                    <div>
                    Movie: {this.state.movieName}
                    </div>
                    <div>
                    Director: {this.state.director}
                    </div>
                    <div>
                    Year: {this.state.releaseYear}
                    </div>
                    {
                        this.state.isUpdating && (<UpdateForm updateMovie={this.updateMovie}
                                                            movieName={this.state.movieName}
                                                            director={this.state.director}
                                                            releaseYear={this.state.releaseYear}
                                                                />)
                    }
                    <div>
                    <Button variant="success" type="button" onClick={this.toggleUpdate}>Update</Button>
                    </div>
                    <div>
                    <Button variant="danger" type="button" onClick={this.deleteMovie}>Delete</Button>
                    </div>
                </div>    
            </>
        )
    }
}