import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

import logo from "../images/logo.png"

interface SingleCardLayoutProps {
    greetingText: string
    promptText: string
    footerPrompt: string
    footerLink: string
    footerLinkText: string
}

const SingleCardLayout: React.FunctionComponent<SingleCardLayoutProps> = ({
    greetingText,
    promptText,
    footerPrompt,
    footerLink,
    footerLinkText,
    children
}) => (
    <div className="mt-5 mb-5">
        <Container>
            <Row className="justify-content-center">
                <Col lg={5}>
                    <Card>
                        <Link to="/">
                            <Card.Header className="pt-4 pb-4 text-center bg-primary">
                                <span>
                                    <img
                                        src={logo}
                                        alt="Logo of Miracle Messages"
                                        height="36"
                                    />
                                </span>
                            </Card.Header>
                        </Link>
                        <Card.Body className="pt-4">
                            <div className="text-center w-75 m-auto">
                                <h4 className="text-dark-50 text-center mt-0 font-weight-bold">
                                    {greetingText}
                                </h4>
                                <p className="text-muted mb-4">{promptText}</p>
                            </div>
                            {children}
                        </Card.Body>
                    </Card>

                    <Row className="mt-3">
                        <Col className="text-center">
                            <p className="text-muted">
                                {footerPrompt}
                                <Link
                                    to={footerLink}
                                    className="text-muted ml-1"
                                >
                                    <b>{footerLinkText}</b>
                                </Link>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
)

export default SingleCardLayout
