SAP Partner Engineering Business Application Studio(BAS) Installer Extension way to install Python,NOTROOT, other tools for customers using Eclipse Theia based IDE's. 

## Manual Enabling of BAS Extras

If there are issues with the [Open-VSX.org](https://open-vsx.org/) registry or the version of BAS you are using has the extensions functions disabled, you can manually enable this extension with the following commands.

```
mkdir -p /home/user/default-plugins
cd /home/user/default-plugins
curl -LO https://open-vsx.org/api/sap-partner-eng/sap-bas-extras/0.0.19/file/sap-partner-eng.sap-bas-extras-0.0.19.vsix
echo "Stop/Start this DevSpace to load the extensions."
```

## Python 3.9.2 Install

Open the command palette with __View -> Find Command…__  function.  Install Python by typing __BAS: Install Python__.  Open up the output and select the __Python Installer__ occurrence to see that it completed without issues.  Then verify that python is available by opening a new terminal and issuing the command.

```
python -V
```

<img src=https://blogs.sap.com/wp-content/uploads/2021/01/partner_eng_inst_python.gif width=582 height=346 />


## Post Python Install Setup

## Select Python Interpreter

Open the command palette with View -> Find Command... and search for "Python:".  Run the "Python: Select Interpreter" command and select /home/user/python_3_9_2/bin/python.

<!-- <img src=https://github.com/andrewlunde/sap-partner-eng-bas-installer-extension/releases/download/v0.0.0/020_select_python.gif width=1056 height=522> -->

## NOTROOT Install

Open the command palette with __View -> Find Command…__  function.  Install Python by typing __BAS: Install NOTROOT__.  Open up the output and select the __NOTROOT Installer__ occurrence to see that it completed without issues.  


## Verify NOTROOT

NOTROOT installs a single command JSON Query(jq).  Verify that it's installed by performing a jq -V in a new terminal.

```
jq -V
```

<img src=https://blogs.sap.com/wp-content/uploads/2021/01/partner_eng_inst_notroot.gif width=582 height=346 />


# SMSI CF-plugin Install

This is a plugin for the Cloud Foundry CLI tool.  It's helpful when doing multitenant application development where the service manager is handling the lifecycle of containers that are created upon customer subscriptions.

Normally these containers are not visible to the Database Explorer since they are not created as hana/hdi-shared instances.

Open the command palette with __View -> Find Command…__  function.  Install Python by typing __BAS: Install CF SMSI Plugin__.  Open up the output and select the __CF SMSI Plugin Installer__ occurrence to see that it completed without issues.  

```
cf plugins
```

# DefaultEnv CF-plugin Install

This is a Cloud Foundry CLI plugin designed to aid local development of multi-target applications (MTAs) in Cloud Foundry. The default-env command creates a local default-env.json file with the environment variables of the specified Cloud Foundry app - typically connection details for bound Cloud Foundry services such as SAP HANA HDI Containers, XSUAA (User Account and Authentication) and intra-MTA destinations defined in mta.yaml. Environment variables written to default-env.json include VCAP_APPLICATION, VCAP_SERVICES and destinations. The default-env.json file is used by @sap/approuter and @sap/hdi-deploy when running locally and it's also possible to use default-env.json from your own Node.js applications via @sap/xsenv as follows:

```
const xsenv = require('@sap/xsenv');
xsenv.loadEnv();
```

Open the command palette with __View -> Find Command…__  function.  Install Python by typing __BAS: Install CF DefaultEnv Plugin__.  Open up the output and select the __CF DefaultEnv Plugin Installer__ occurrence to see that it completed without issues.  

```
cf plugins
```
# HANA Academy Yeoman Generators Install

This is a set of Yeoman project generators provided by the HANA Academy.

```
```

Open the command palette with __View -> Find Command…__  function.  Install Python by typing __BAS: Install CF DefaultEnv Plugin__.  Open up the output and select the __CF DefaultEnv Plugin Installer__ occurrence to see that it completed without issues.  

```
cf plugins
```

