# Use this file to deploy the extension to your application catalog
$tenantUrl = "https://tauquadra.sharepoint.com"

# Get credentials
$credentials = Get-Credential
Connect-PnPOnline $tenantUrl -Credentials $credentials

Add-PnPApp -path .\sharepoint\solution\spo-customization.sppkg -Publish -SkipFeatureDeployment -Overwrite
