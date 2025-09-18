/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import { waitFor } from "@webpack";

export default definePlugin({
    name: "bypassAgeVerification",
    description: "Jukes the client-side check for whether the user's account is able to view large (1000+ members) servers & nsfw channels.\nUseful if you don't want to send your ID and face to the three letter agencies.",
    authors: [Devs.Chlora],

    start() {
        waitFor("getCurrentUser", (UserStore: any) => {
            UserStore.getCurrentUser().ageVerificationStatus = 3;
        });
    }
});
