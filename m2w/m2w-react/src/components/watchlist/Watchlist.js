import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Spinner } from 'react-bootstrap'
import WatchlistTitleCards from "./WatchlistTitleCards";
import { getUserByIdApiCall } from '../../apiCalls/userApiCalls'
import { getCurrentUser } from '../../helpers/authHelper'

class Watchlist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: getCurrentUser().userId,
            user: null,
            error: null,
            isLoaded: false,
            message: null
        }
    }

    componentDidMount() {
        this.fetchUserDetails()
    }

    fetchUserDetails = () => {
        getUserByIdApiCall(this.state.userId)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        this.setState({
                            user: null,
                            message: data.message
                        })
                    } else {
                        this.setState({
                            user: data,
                            message: null
                        })
                    }
                    this.setState({
                        isLoaded: true,
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                })
    }

    render() {
        const { user, error, isLoaded, message } = this.state
        let content;
        let loading;

        if (error) {
            content = <p className="loading-message">Error: {error.message}</p>
        } else if (!isLoaded) {
            loading =
                <div className="d-flex justify-content-center pt-3">
                    <div className="loading-div d-grid gap-2">
                        <span className="loading-span d-flex" >
                            <Spinner
                                as="span"
                                animation="border"
                                size="lg"
                                role="status"
                                aria-hidden="true"
                                variant="primary"
                            />
                            Loading...
                        </span>
                    </div>
                </div>
        } else if (message) {
            content = <p className="loading-message">{message}</p>
        } else {
            content = <WatchlistTitleCards userData={user} />
        }

        return (
            < Container id="search-container" fluid >
                {loading}
                <Row className="px-5">
                    {content}
                </Row>
            </Container >
        );
    }
};

export default Watchlist