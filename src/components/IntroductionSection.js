import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

const IntroductionSection = () => {
    const data = useStaticQuery(
        graphql`
        query {
        allKontentItemLandingpage {
            nodes {
              elements {
                logo {
                  value {
                    url
                  }
                }
                introduction_section {
                  value {
                    ... on kontent_item_introduction_perks {
                      id
                      elements {
                        text {
                          value
                        }
                        title_1st_line {
                          value
                        }
                        title_2nd_line {
                          value
                        }
                      }
                    }
                    ... on kontent_item_introduction_section {
                      id
                      elements {
                        main_picture {
                          value {
                            url
                          }
                        }
                        introduction_text {
                          value {
                            id
                          }
                        }
                        introduction_perks {
                          value {
                            id
                          }
                        }
                      }
                    }
                    ... on kontent_item_introduction_text {
                      id
                      elements {
                        title {
                          value
                        }
                        text {
                          value
                        }
                      }
                    }
                  }
                }
              }
              id
            }
          }
        }
        `
    );
        return (
            <div>
                <h1>Sekcjs</h1>
        <p>{data.allKontentItemLandingpage.nodes[0].elements.logo.value[0].url}</p>
            </div>
        )
}

export default IntroductionSection;