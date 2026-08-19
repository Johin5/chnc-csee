import Foundation
import Vision
import CoreImage

// usage: facedet <file-with-image-paths>  → prints "path|x|y|w|h" (pixel coords, top-left origin), largest face per image
let listPath = CommandLine.arguments[1]
let paths = try String(contentsOfFile: listPath, encoding: .utf8).split(separator: "\n").map(String.init)
for p in paths where !p.isEmpty {
    let url = URL(fileURLWithPath: p)
    guard let ci = CIImage(contentsOf: url) else { print("\(p)|ERR"); continue }
    let W = ci.extent.width, H = ci.extent.height
    let req = VNDetectFaceRectanglesRequest()
    let handler = VNImageRequestHandler(ciImage: ci, options: [:])
    do {
        try handler.perform([req])
        if let faces = req.results, let best = faces.max(by: { $0.boundingBox.height < $1.boundingBox.height }) {
            let b = best.boundingBox
            let x = b.origin.x * W
            let yTop = (1 - b.origin.y - b.height) * H
            print("\(p)|\(Int(x))|\(Int(yTop))|\(Int(b.width * W))|\(Int(b.height * H))")
        } else { print("\(p)|NOFACE") }
    } catch { print("\(p)|ERR") }
}
