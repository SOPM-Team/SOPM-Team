import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

interface VoteButtonProps {
  onVote?: () => void;
}

interface VoteButtonState {
  count: number;
}

class VoteButton extends Component<VoteButtonProps, VoteButtonState> {
  constructor(props: VoteButtonProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handlePress = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));

    if (this.props.onVote) {
      this.props.onVote();
    }
  };

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={this.handlePress}>
          <Text>Vote</Text>
        </TouchableOpacity>
        <View>
          <Text>{this.state.count} votes</Text>
        </View>
      </View>
    );
  }
}

interface VoteOptionProps {
  name: string;
  imageUrl: string;
  onVote: () => void;
}

class VoteOption extends Component<VoteOptionProps> {
  render() {
    return (
      <View style={styles.optionContainer}>
        <Text style={styles.optionName}>{this.props.name}</Text>
        <Image
          source={{ uri: this.props.imageUrl }}
          style={styles.optionImage}
          resizeMode="cover"
        />
        <VoteButton onVote={this.props.onVote} />
      </View>
    );
  }
}

interface VoteAppState {
  totalVotes: number;
}

export default class VoteApp extends Component<Record<string, never>, VoteAppState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      totalVotes: 0,
    };
  }

  handleTotalVote = () => {
    this.setState((prevState) => ({
      totalVotes: prevState.totalVotes + 1,
    }));
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Votează opțiunea preferată</Text>
        <Text style={styles.totalText}>Total voturi: {this.state.totalVotes}</Text>

        <VoteOption
          name="Opțiunea A"
          imageUrl="https://picsum.photos/seed/voteA/400/200"
          onVote={this.handleTotalVote}
        />
        <VoteOption
          name="Opțiunea B"
          imageUrl="https://picsum.photos/seed/voteB/400/200"
          onVote={this.handleTotalVote}
        />
        <VoteOption
          name="Opțiunea C"
          imageUrl="https://picsum.photos/seed/voteC/400/200"
          onVote={this.handleTotalVote}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 50,
    paddingBottom: 40,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  totalText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333333',
  },
  optionContainer: {
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
  },
  optionName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  optionImage: {
    width: '100%',
    height: 180,
    borderRadius: 6,
    marginBottom: 12,
    backgroundColor: '#EFEFEF',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});