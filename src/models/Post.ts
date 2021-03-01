import {JsonConvert, JsonObject, JsonProperty} from "json2typescript"

@JsonObject("Post")

export default class Post {

    @JsonProperty("id", Number, true)
    id?: number = undefined;
    @JsonProperty("title", String, true)
    title?: string = undefined
    @JsonProperty("content", String, true)
    content?: string = undefined
    @JsonProperty("description", String, true)
    description?: string = undefined
    
}