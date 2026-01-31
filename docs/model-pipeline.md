# Model Pipeline Guide (Blender → GLB)

## Export
1. Clean up geometry, remove hidden faces, apply scale (Ctrl+A).
2. Use PBR materials with base color, metallic, roughness.
3. File → Export → glTF 2.0 (.glb).
4. Enable "Compression" and keep textures < 2K.

## Targets
- File size: < 10MB per model.
- Texture budget: 2K max per map, 4 maps max.

## Naming
- Model: `product-slug.glb`
- Textures: `product-slug_basecolor.png`, `product-slug_normal.png`

## Optimization
- Use Draco compression when possible.
- Merge meshes where possible.
- Remove unused materials and vertices.
