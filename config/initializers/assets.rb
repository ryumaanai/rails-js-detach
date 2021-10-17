webpack_manifest_path = Rails.root.join('public', 'assets', 'manifest.json')
Rails.application.config.assets.webpack_manifest = JSON.parse(File.read(webpack_manifest_path)) if File.exist?(webpack_manifest_path)
 