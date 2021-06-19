#version 450 core
in vec3 ourColor;
in vec2 TexCoord;

out vec4 color;

uniform vec3 Colorizadora;

// Texture sampler
uniform sampler2D ourTexture1;



uniform int code;

void main()
{

    color = texture(ourTexture1, TexCoord);// * vec4(ourColor, 1.0);

    color = color + vec4 (Colorizadora, 0.0);
}