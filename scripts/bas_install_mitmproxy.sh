#!/bin/bash
do_run=1 # Execute(evaluate) the commands
#do_run=0 # Don't evaluate any commands
do_echo=1 # Echo the commands
#do_echo=0 # Don't echo any commands
#
# See https://blogs.sap.com/2020/12/10/xtending-business-application-studio-1-of-3/
#
echo ""
#destdir="/home/user/projects/hana-python-securestore/tools"
#destdir="/home/user"
nrver="0_0_1"
rcfile="~/.bashrc"
#rcfile="bashrc"

if [ "$#" -ge 1 ]; then
  nrver=$1
  if [ $nrver = "0_0_1" ]; then
    echo "Version 0_0_1 cool."
  else
    if [ $nrver = "0_0_2" ]; then
      echo "Version 0_0_2 cool."
    else
      echo "Version $nrver is not supported, try again."
      exit 1
    fi
  fi
fi

if [ "$#" -ge 2 ]; then
  destdir=$2
else
  destdir="/home/user/python_3_9_2"
fi

echo ""
echo "Checking if python 3.9.2 installed."

if [ -d "$destdir" ]; then

echo ""
echo $destdir exists!

#cmd='notroot install mitmproxy'
#if [ $do_echo -eq 1 ]; then echo $cmd; fi
#if [ $do_run -eq 1 ]; then eval $cmd; fi

#cmd='sed -i -e "s/\/usr\/bin\/python3/\/home\/user\/notroot\/usr\/bin\/python3/g" /home/user/notroot/usr/bin/mitmproxy'
#if [ $do_echo -eq 1 ]; then echo $cmd; fi
#if [ $do_run -eq 1 ]; then eval $cmd; fi

cmd='pip install pipx'
if [ $do_echo -eq 1 ]; then echo $cmd; fi
if [ $do_run -eq 1 ]; then eval $cmd; fi

cmd='pip install mitmproxy'
if [ $do_echo -eq 1 ]; then echo $cmd; fi
if [ $do_run -eq 1 ]; then eval $cmd; fi

cmd='mitmproxy --version'
if [ $do_echo -eq 1 ]; then echo $cmd; fi
if [ $do_run -eq 1 ]; then eval $cmd; fi

else
echo ""
echo $destdir does not exist!
echo "Install python 3.9.2 before attempting to install mitmproxy!"
fi
