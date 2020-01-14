import React from "react";
import { oauth2 as SMART } from "fhirclient";

/**
 * Typically the launch page is an empty page with a `SMART.authorize`
 * call in it.
 *
 * This example demonstrates that the call to authorize can be postponed
 * and called manually. In this case we use ReactRouter which will match
 * the `/launch` path and render our component. Then, after our page is
 * rendered we start the auth flow.
 */
export default class Launcher extends React.Component {
    /**
     * This is configured to make a Standalone Launch, just in case it
     * is loaded directly. An EHR can still launch it by passing `iss`
     * and `launch` url parameters
     */
    componentDidMount() {
        SMART.authorize({
            clientId: "ba2b34f9-2f17-4858-b5f9-6a5b3312e26a",
            scope: "patient/Patient.read patient launch",
            redirectUri: "./app",
            iss: "https://fhir-ehr.sandboxcerner.com/r4/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca"
        });
    }
    /**
     * Could also return `null` for empty page
     */
    render() {
        return "Launching...";
    }
}
